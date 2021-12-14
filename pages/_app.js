import React, { useEffect, useState } from 'react';
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import TagManager from 'react-gtm-module';

// Components
import Loading from "../components/Loading";

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
	const router = useRouter();

	i18next.changeLanguage(pageProps.language);
	const [loading, setLoading] = useState(false);
	const apolloClient = useApollo(pageProps)

	useEffect(() => {
		let unmounted   = false;

		if(!unmounted ) {
			//set lang tag
			i18next.on('languageChanged', (lng) => {document.documentElement.setAttribute('lang', lng);})

			TagManager.initialize({ gtmId: 'GTM-5CWJD4N' });
			window.addEventListener('scroll', scrollHandler);
		}

		// Loading
		const handleStart = () => {
			setLoading(true);
		};

		const handleComplete = () => {
			setLoading(false);
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => unmounted = true;

	}, [router]);

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
					{loading ? (
						<Loading loading={loading} />
					) : (
						<Component {...pageProps} />
					)}
				</ThemeProvider>
			</ApolloProvider>
		</>
	);
};

export default App;
