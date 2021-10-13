import { useState } from "react";

// Components
import Layout from "../components/Layout";
import Services from "../components/Services";

//API
import client from "../lib/apollo/apolloClient";
import { GET_HOME, GET_SOCIAL } from "../lib/apollo/queries/getHome";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home(props) {
	const [state, setState] = useState(props.nodeInfo.page);

	const { t } = useTranslation("common");

	if (!state) {
		return <h1>Error with request content!</h1>;
	}

	return (
		<Layout data={state} props={props}>
			<Services
				data={state.fieldServices}
				description={props.fieldServiceDescription}
			/>
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

	const response = await Promise.all([getHome, socialLink]);

	return {
		props: {
			nodeInfo: response[0].data,
			socialLinks: response[1].data,
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
