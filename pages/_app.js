import React, { useEffect, useState } from 'react';
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import TagManager from 'react-gtm-module';
import NextSeo from 'next-seo';
import { useRouter } from 'next/router';
import { BASE_URL } from "../utils/config";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import GlobalStyle from "../components/GlobalStyle";
import "aos/dist/aos.css";

// API
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/apolloClient";

// i18n integration
import '../i18n/init';
import i18next from 'i18next';

const theme = {
	colors: {
		primary: "#0070f3",
	},
};

const App = ({ Component, pageProps }) => {
	i18next.changeLanguage(pageProps.language);
	const apolloClient = useApollo(pageProps);
	const { query } = useRouter();

	const DEFAULT_SEO = {
		title: 'DevRocha',
		description: 'Web development',
		openGraph: {
			type: 'website',
			locale: query.lang,
			url: 'https://devrocha.pt',
			title: 'DevRocha',
			description: 'Freelancer Website development.',
			image:
				'https://devrocha.pt/images/logo_size.jpg',
			site_name: 'DevRocha',
			imageWidth: 200,
			imageHeight: 200
		}
	};

	useEffect(() => {
		let unmounted   = false;

		if(!unmounted ) {
			//set lang tag
			i18next.on('languageChanged', (lng) => {document.documentElement.setAttribute('lang', lng);})

			//Tag Manager
			TagManager.initialize({ gtmId: 'GTM-5CWJD4N' });

			// Set Scroll event
			window.addEventListener('scroll', scrollHandler);
		}

		return () => unmounted = true;

	}, [pageProps]);

	const scrollHandler = () => {
		const navbarLinks = document.getElementsByClassName('scrollto');
		let position = window.scrollY + 200;

		Array.prototype.map.call(navbarLinks, navbarLink => {
			let id = navbarLink.hash.replace("#", "");
			let section = document.getElementById(id);
			if(!section) return
			if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
				navbarLink.classList.add('active');
			} else {
				navbarLink.classList.remove('active');
			}
		})
	}

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="shortcut icon" href="/images/favicon/favicon.ico" /> */}
			</Head>
			
			<GlobalStyle />

			<ApolloProvider client={apolloClient}>
				<ThemeProvider theme={theme}>
					<NextSeo config={DEFAULT_SEO} />
					<Component {...pageProps} />
				</ThemeProvider>
			</ApolloProvider>
		</>
	);
};

export default App;
