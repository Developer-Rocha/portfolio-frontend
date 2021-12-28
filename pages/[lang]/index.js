import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

// Components
import Loading from "../../components/Loading";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import TeaserPricing from "../../components/TeaserPricing";

//API
import { initializeApollo } from "../../apollo/apolloClient";
import { GET_NODE } from "../../apollo/queries/getNode";
import { GET_SOCIAL } from "../../apollo/queries/getSocial";
import { GET_PORTFOLIO } from "../../apollo/queries/getPortfolio";

export default function LangIndex( props ) {
	const { isFallback } = useRouter();

	const [state, setState] = useState(props.nodeInfo.page);

	useEffect(() => {
		setState(props.nodeInfo.page);
	}, [props]);

	if (!state) {
		return <h1>Erro ao carregar os conteúdos.</h1>;
	}

	if (isFallback) {
        return <Loading />
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

				{
					state.fieldModules.map((item, index) => {
						if(item.entity.__typename == 'ParagraphPricingTable') {
							return <TeaserPricing key={index} data={item.entity} />
						}
						if(item.entity.__typename == 'ParagraphServices') {
							return <Services key={index} data={item.entity.services} description={item.entity.description}/>
						}
						if(item.entity.__typename == 'ParagraphAbout') {
							return <About key={index} title={item.entity.title} description={item.entity.description}/>
						}
						if(item.entity.__typename == 'ParagraphPortfolio') {
							return <Portfolio key={index} portfolio={item.entity.fieldPortfolio} />
						}
						if(item.entity.__typename == 'ParagraphWebformContact') {
							return <Contact key={index} data={item.entity} />
						}
						else {
							return null;
						}
					})
				}
			</Layout>
		</>
	);
}

export const getStaticPaths = async () => {
	const paths = getAllLanguageSlugs();

	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps = async ({ params }) => {
    const language = getLanguage(params.lang);
	const lang = language === "en" ? "EN" : "PT_PT";
	const apolloClient = initializeApollo();

	const getNode = apolloClient.query({
		query: GET_NODE,
		variables: {
			language: lang,
			id: 1,
		},
	});

	const socialLink = apolloClient.query({
		query: GET_SOCIAL,
		variables: {
			language: lang,
		},
	});

	const response = await Promise.all([getNode, socialLink]);

	return {
		props: {
            language,
			nodeInfo: response[0].data,
			socialLinks: response[1].data,
			title: response[0].data ? response[0].data.page.title : 'Developer Rocha',
			description: response[0].data ? response[0].data.page.fieldSeoDescription : null
		},

		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 1 seconds
		revalidate: 1 // In seconds
	};
}
