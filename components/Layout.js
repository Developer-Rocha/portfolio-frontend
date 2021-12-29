import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { BASE_URL } from "../utils/config";

import i18next from 'i18next';

import AOS from "aos";

// SEO
import { NextSeo } from 'next-seo';

// Components
import Loading from "../components/Loading";
import Header from "./Header";
import Footer from './Footer';

export default function Layout({ children, props }) {
	const { asPath } = useRouter();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// here you can add your aos options
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});

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
	}, [router]);

	return (
		<>
			<NextSeo
				title={props.nodeInfo.page.seoTitle ? "DevRocha | " + props.nodeInfo.page.seoTitle : "DevRocha"}
				description={props.description}
				canonical={BASE_URL + asPath}
				additionalLinkTags={[
					{
						rel: 'icon',
						href: `${BASE_URL}/images/favicon/favicon.ico`
					},
					{
						rel: 'apple-touch-icon',
						href: `${BASE_URL}/images/favicon/touch-icon-ipad.png`,
						sizes: '76x76'
					},
					// {
					// 	rel: 'manifest',
					// 	href: `${BASE_URL}/manifest.json`
					// }
				]}
				openGraph={{
					type: 'website',
					url: BASE_URL + asPath,
					title: props.title,
					description: props.description,
					images: [
						{
							url: `${BASE_URL}/images/logo_size_invert.jpg`,
							width: 200,
							height: 200,
							alt: 'Developer Rocha - Creative Websites',
						},
						{
							url: `${BASE_URL}/images/logo_size.jpg`,
							width: 200,
							height: 200,
							alt: 'Developer Rocha - Creative Websites',
						},
					],
				}}
			/>
			{loading ?
			(
				<Loading loading={loading} />
			) : (
				<div>
					<Header data={props.nodeInfo.page.fieldModules} />

					<main>{children}</main>

					<Footer socialLinks={props.socialLinks.social} />
				</div>
			)}
		</>
	);
}
