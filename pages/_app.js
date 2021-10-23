import React, { useEffect, useState } from 'react';
import Router from "next/router";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useDefaultLocale } from "../utils/UseDefaultLocale";

// Components
import Loading from "../components/Loading";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";

import "aos/dist/aos.css";
import GlobalStyle from "../components/GlobalStyle";

// API
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo/apolloClient";

const theme = {
	colors: {
		primary: "#0070f3",
	},
};

const App = ({ Component, pageProps }) => {
	useDefaultLocale();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let unmounted   = false;

		if(!unmounted ) {
			window.addEventListener('scroll', scrollHandler);
		}

		return () => unmounted = true;

	}, []);

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

	Router.events.on("routeChangeStart", (url) => {
		setLoading(true);
	});
	Router.events.on("routeChangeComplete", (url) => {
		setLoading(false);
	});

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<GlobalStyle />

			<ApolloProvider client={client}>
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
