import React, { useEffect, useState } from 'react';
import Router from "next/router";
import { ThemeProvider } from "styled-components";

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
import client from "../lib/apollo/apolloClient";

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
