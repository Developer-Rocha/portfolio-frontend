import fs from 'fs'
import path from 'path'
import { useState } from "react";
import { useRouter } from 'next/router'

import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";


// Components
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";

//API
import client from "../../lib/apollo/apolloClient";
import { GET_NODE } from "../../lib/apollo/queries/getNode";
import { GET_SOCIAL } from "../../lib/apollo/queries/getSocial";
import { GET_PORTFOLIO } from "../../lib/apollo/queries/getPortfolio";

const cacheFilePortfolio = '.dev-to-cache-portfolio.json'

export default function LangIndex( props ) {
	const router = useRouter();
	const { pathname } = router;

	const [state, setState] = useState(props.nodeInfo.page);

	if (!state) {
		return <h1>Erro ao carregar os conteúdos.</h1>;
	}

	return (
		<>
			<Layout props={props}>
				<Hero
					title={state.title}
					backgroundImage={state.fieldHeroImage}
					typedAnimation={state.fieldTypedAnimation}
					socialLinks={props.socialLinks.social}
				/>

				<Services
					data={state.fieldServices}
					description={state.fieldServiceDescription}
				/>

				<Portfolio portfolio={props.portfolio.portfolio} />

				<Contact />
			</Layout>
		</>
	);
}

export async function getStaticPaths() {
	const paths = getAllLanguageSlugs();

	// Get the published Portfolios and cache them for use in getStaticProps
	const portfolioQuery = client.query({
		query: GET_PORTFOLIO,
		variables: {
			language: "EN"
		}
	})

	const response = await Promise.all([portfolioQuery]);

	const portfolio = response[0].data;

	// Save portfolio data to cache file
    fs.writeFileSync(path.join(process.cwd(), cacheFilePortfolio), JSON.stringify(portfolio))

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
    const language = getLanguage(params.lang);
	const langcode = language === "en" ? "EN" : "PT_PT"

	const getNode = client.query({
		query: GET_NODE,
		variables: {
			language: langcode,
			id: 1,
		},
	});

	const socialLink = client.query({
		query: GET_SOCIAL,
		variables: {
			language: langcode,
		},
	});

	const response = await Promise.all([getNode, socialLink]);

	// Read cache and parse to object
    const cacheContents = fs.readFileSync(path.join(process.cwd(), cacheFilePortfolio), 'utf-8')
    const cache = JSON.parse(cacheContents)

	// Fetch the portfolio from the cache
	const portfolio = cache;

	return {
		props: {
            language,
			nodeInfo: response[0].data,
			socialLinks: response[1].data,
			portfolio: portfolio,
			title: response[0].data ? response[0].data.page.title : 'Developer Rocha',
			description: response[0].data ? response[0].data.page.fieldSeoDescription : null
		},
	};
}
