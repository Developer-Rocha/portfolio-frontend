import { useRouter } from "next/router";
import { getLanguage } from "../../../lib/lang";
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

    const paths = response[0].data.portfolio.entities.map(portfolio => {
        return {
            params: {
                lang: "en",
                slug: portfolio.id
            },
            params: {
                lang: "pt",
                slug: portfolio.id
            }
        }
    })

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
            id: slug
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
