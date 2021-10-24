import React from "react";
import Head from "next/head";
import { useEffect } from "react";

import i18next from 'i18next';

import AOS from "aos";

// Components
import Header from "./Header";
import Hero from "./Hero";
import Footer from './Footer';

export default function Layout({ children, props }) {
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
				<meta name="description" content="Learn how to build a personal website using Next.js" />
				<meta name="og:title" content={i18next.t('siteMeta.title')} />
			</Head>

			<div>
				<Header />

				<main>{children}</main>

				<Footer socialLinks={props.socialLinks.social} />
			</div>
		</>
	);
}
