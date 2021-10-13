import { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";

// Components
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";

//API
import client from "../lib/apollo/apolloClient";
import { GET_HOME, GET_SOCIAL } from "../lib/apollo/queries/getHome";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

export default function Home(props) {
	const [state, setState] = useState(props.nodeInfo.page);

	const { t } = useTranslation("common");

	useEffect(() => {
		// here you can add your aos options
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});
	}, []);

	if (!state) {
		return <h1>Error with request content!</h1>;
	}

	return (
		<>
			<div>
				<Header />

				<Hero
					title={state.title}
					typedAnimation={state.fieldTypedAnimation}
					socialLinks={props.socialLinks.social}
				/>

				<Services
					data={state.fieldServices}
					description={state.fieldServiceDescription}
				/>
			</div>
		</>
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
