import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getLanguage } from "../../lib/lang";
import { languages } from '../../i18n/config';

import { normalizeUrlAliases } from "../../utils/helpers";

// Components
import Loading from "../../components/Loading";
import Layout from "../../components/Layout";
import GenericHero from "../../components/GenericHero";
import About from "../../components/About";
import Services from "../../components/Services";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import TeaserPricing from "../../components/TeaserPricing";
import Text from "../../components/Text";

//API
import { initializeApollo } from "../../apollo/apolloClient";
import { GET_NODES } from "../../apollo/queries/getNodes";
import { GET_NODE } from "../../apollo/queries/getNodeByPath";
import { GET_SOCIAL } from "../../apollo/queries/getSocial";

const apolloClient = initializeApollo();

export default function Pages( props ) {
    const { isFallback } = useRouter();
    const [state, setState] = useState(props.nodeInfo.node);

    useEffect(() => {
		setState(props.nodeInfo.node.entity);
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
				{
                    state.fieldHeroImage ?
                    <GenericHero
					title={state.title}
					backgroundImage={state.fieldHeroImage}
					socialLinks={props.socialLinks.social}
				    />
                    : null
                }

				{
                    state.fieldModules ?
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
						if(item.entity.__typename == 'ParagraphText') {
							return <Text key={index} data={item.entity} />
						}
						else {
							return null;
						}
					})
                    : null
				}
			</Layout>
		</>
	);
}

export const getStaticPaths = async () => {
    // Get english translations
    const nodes = apolloClient.query({
		query: GET_NODES,
		variables: {
            langcode: "EN"
		}
	})

    const response = await Promise.all([nodes,]);

    // English Array
    const pathsEN = response[0].data.nodes.entities.map(( node ) => ({
        params: {lang: "en", slug: normalizeUrlAliases(node.url.path) }
    }));

    // Portuguese Array
    const pathsPT = response[0].data.nodes.entities.map(( node ) => ({
        params: {lang: "pt", slug: normalizeUrlAliases(node.translation.url.path) }
    }));

    return {
        paths: pathsEN.concat(pathsPT),
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const language = getLanguage(context.lang);
    const langcode = language === "en" ? "EN" : "PT_PT";
    const { lang, slug  } = context.params;
    let nodePath = slug;

    if (lang === "pt") {
        nodePath = "pt-pt/" + slug;
    }

    const node = apolloClient.query({
		query: GET_NODE,
		fetchPolicy: "no-cache",
		variables: {
            path: nodePath
		}
	})

    const socialLink = apolloClient.query({
		query: GET_SOCIAL,
		variables: {
			language: langcode,
		},
	});

    const response = await Promise.all([node, socialLink]);

    if (!response[0].data.node) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            language,
			nodeInfo: response[0].data,
			socialLinks: response[1].data,
			title: response[0].data ? response[0].data.node.entity.title : 'Developer Rocha',
			description: response[0].data ? response[0].data.node.entity.fieldSeoDescription : null
        },
        revalidate: 10,
    }
}
