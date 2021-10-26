import React from "react";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from 'next/router'
import { BASE_URL } from "../utils/config";

import i18next from 'i18next';

import AOS from "aos";

// SEO
import { NextSeo } from 'next-seo';

// Components
import Header from "./Header";
import Footer from './Footer';

export default function Layout({ children, props }) {
	const router = useRouter();
	const { asPath } = router;

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
			<NextSeo
				title={props.title}
				description={props.description}
				canonical={BASE_URL + asPath}
				additionalLinkTags={[
					{
						rel: 'icon',
						href: '/images/favicon/favicon.ico'
					},
					{
						rel: 'apple-touch-icon',
						href: '/images/favicon/touch-icon-ipad.png',
						sizes: '76x76'
					},
					{
						rel: 'manifest',
						href: '/manifest.json'
					}
				]}
				openGraph={{
					type: 'website',
					url: BASE_URL,
					title: props.title,
					description: props.description,
					images: [
					  {
						url: '/images/logo_size.jpg',
						width: 192,
						height: 192,
						alt: 'Developer Rocha - Creative Websites',
					  },
					  {
						url: '/images/logo_size_invert.jpg',
						width: 192,
						height: 192,
						alt: 'Developer Rocha - Creative Websites',
					  },
					],
				}}
			/>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="shortcut icon" href="/images/favicon/favicon.ico" /> */}
			</Head>

			<div>
				<Header />

				<main>{children}</main>

				<Footer socialLinks={props.socialLinks.social} />
			</div>
		</>
	);
}
