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

    const portfolio = apolloClient.query({
		query: GET_PORTFOLIO,
		variables: {
			language: "EN"
		}
	})

    const response = await Promise.all([portfolio]);

    // Generate paths for each language
    const paths = languages.map(( language ) =>
        response[0].data.portfolio.entities.map(( portfolio ) => ({
            params: {lang: language, slug: normalizeUrlAliases(portfolio.url.path) }
        }))
    ).flat()

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const { slug } = context.params;
    const language = getLanguage(context.lang);
	const langcode = language === "en" ? "EN" : "PT_PT"

    const portfolio = apolloClient.query({
		query: GET_PORTFOLIO_BY_ID,
		variables: {
			language: langcode,
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
