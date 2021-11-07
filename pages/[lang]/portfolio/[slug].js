import { useRouter } from "next/router";
import { getLanguage } from "../../../lib/lang";
import { languages } from '../../../i18n/config';

import { normalizeUrlAliases } from "../../../utils/helpers";

// Components
import Loading from "../../../components/Loading";
//API
import { initializeApollo } from "../../../apollo/apolloClient";
import { GET_PORTFOLIO } from "../../../apollo/queries/getPortfolio";
import { GET_PORTFOLIO_BY_ID } from "../../../apollo/queries/getPortfolioById";

const apolloClient = initializeApollo();

export default function Portfolio({ portfolio }) {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <Loading />
    }

    return (
        <div>
            <h1> { portfolio.portfolio.title }</h1>
        </div>
    );
}

export const getStaticPaths = async () => {
    // Get english translations
    const portfolioEN = apolloClient.query({
		query: GET_PORTFOLIO,
		variables: {
			language: "EN",
            langcode: "EN"
		}
	})

    // Get portuguese translations
    const portfolioPT = apolloClient.query({
		query: GET_PORTFOLIO,
		variables: {
			language: "PT_PT",
            langcode: "pt-pt"
		}
	})

    const response = await Promise.all([portfolioEN, portfolioPT]);

    // English Array
    const pathsEN = response[0].data.portfolio.entities.map(( portfolio ) => ({
        params: {lang: "en", slug: normalizeUrlAliases(portfolio.url.path) }
    }));

    // Portuguese Array
    const pathsPT = response[1].data.portfolio.entities.map(( portfolio ) => ({
        params: {lang: "pt", slug: normalizeUrlAliases(portfolio.url.path) }
    }));

    return {
        paths: pathsEN.concat(pathsPT),
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const { slug } = context.params; // TODO we need to use this slug to get the portfolio instead of using the ID.
    const language = getLanguage(context.lang);
	const lang = language === "en" ? "EN" : "PT_PT"

    const portfolio = apolloClient.query({
		query: GET_PORTFOLIO_BY_ID,
		variables: {
			language: lang,
            id: "3" // TODO change this id for a dynamic URL path
		}
	})

    const response = await Promise.all([portfolio]);

    return {
        props: {
            portfolio: response[0].data,
        },
        revalidate: 10,
    }
}
