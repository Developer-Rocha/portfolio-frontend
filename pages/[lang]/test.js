import React, { useEffect } from 'react';
import i18next from 'i18next';

import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

import Layout from '../../components/Layout';

//API
import client from "../../lib/apollo/apolloClient";
import { GET_SOCIAL } from "../../lib/apollo/queries/getSocial";

const Test = (props) => {

	return (
		<Layout props={props}>
			<h1 className="mt-5 mb-5 font-bold text-4xl">test.js</h1>
			<p>{i18next.t('helloWorld')}</p>
		</Layout>
	);
};

export default Test;

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

	const socialLink = client.query({
		query: GET_SOCIAL,
		variables: {
			language: langcode,
		},
	});

	const response = await Promise.all([socialLink]);

	return {
		props: {
            language,
			socialLinks: response[0].data,
			title: 'Developer Rocha',
			description: 'Development of perfects websites'
		},
	};
}
