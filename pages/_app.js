import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Styles
import GlobalStyle from "../components/GlobalStyle";

const theme = {
	colors: {
		primary: "#0070f3",
	},
};

export default function App({ Component, pageProps }) {
	useEffect(() => {
		// here you can add your aos options
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});
	}, []);

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
}
