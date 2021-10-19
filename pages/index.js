import { useState } from "react";

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

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home(props) {
	const [state, setState] = useState(props.nodeInfo.page);

	const { t } = useTranslation("common");

	if (!state) {
		return <h1>{t('query_error_message')}</h1>;
	}

	return (
		<Layout data={state} props={props}>
			<Services
				data={state.fieldServices}
				description={props.fieldServiceDescription}
			/>

			<Portfolio portfolio={props.portfolio.portfolio} />

			<Contact />
		</Layout>
	);
}

export async function getStaticProps({ locale }) {
	const langcode = locale === "en" ? "EN" : "PT_PT";

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
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
