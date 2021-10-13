import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

import { useDefaultLocale } from "../utils/UseDefaultLocale";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";

import "aos/dist/aos.css";
import GlobalStyle from "../components/GlobalStyle";

const theme = {
	colors: {
		primary: "#0070f3",
	},
};

const App = ({ Component, pageProps }) => {
	useDefaultLocale();

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<GlobalStyle />

			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default appWithTranslation(App);
