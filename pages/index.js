import { useState } from "react";
import { useRouter } from 'next/router'

// SEO
import { NextSeo } from 'next-seo';

// Components
import Layout from "../components/Layout";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

//API
import client from "../lib/apollo/apolloClient";
import { GET_HOME, GET_SOCIAL } from "../lib/apollo/queries/getHome";
import { GET_PORTFOLIO } from "../lib/apollo/queries/getPortfolio";
import { GET_WEBFORM } from "../lib/apollo/queries/getWebform";



export default function Home(props) {
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

export async function getStaticProps() {
	const langcode = "PT_PT"

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
			nodeInfo: response[0].data,
			socialLinks: response[1].data,
			portfolio: response[2].data,
			webform: response[3].data,
		},
	};
}
