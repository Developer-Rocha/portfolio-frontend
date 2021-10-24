import { useState } from "react";
import { useRouter } from 'next/router'

import i18next from 'i18next';

import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

// SEO
import { NextSeo } from 'next-seo';

// Components
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";

//API
import client from "../../lib/apollo/apolloClient";
import { GET_HOME, GET_SOCIAL } from "../../lib/apollo/queries/getHome";
import { GET_PORTFOLIO } from "../../lib/apollo/queries/getPortfolio";
import { GET_WEBFORM } from "../../lib/apollo/queries/getWebform";

export default function LangIndex( props ) {
	const router = useRouter()
	const baseUrl = "http://localhost:3000"

	const [state, setState] = useState(props.nodeInfo.page);

	if (!state) {
		return <h1>Erro ao carregar os conteúdos.</h1>;
	}

	return (
		<>
			<NextSeo
				title={state.title}
				description={state.fieldSeoDescription}
				canonical={baseUrl + router.pathname}
			/>

			<Layout data={state} props={props}>
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
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
    const language = getLanguage(params.lang);

	const langcode = language === "en" ? "EN" : "PT_PT"

	const getHome = client.query({
		query: GET_HOME,
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

	const portfolio = client.query({
		query: GET_PORTFOLIO,
		variables: {
			language: langcode
		}
	})

	const webform = client.query({
		query: GET_WEBFORM,
		variables: {
			id: "contact"
		}
	})

	const response = await Promise.all([getHome, socialLink, portfolio, webform]);

	return {
		props: {
            language,
			nodeInfo: response[0].data,
			socialLinks: response[1].data,
			portfolio: response[2].data,
			webform: response[3].data,
		},
	};
}
