import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import NextSeo from 'next-seo';
import { BASE_URL } from "../utils/config";

import i18next from 'i18next';

import AOS from "aos";

// Components
import Loading from "../components/Loading";
import Header from "./Header";
import Footer from "./Footer";
import CookieNotice from "./CookieNotice";

export default function Layout({ children, props }) {
	const { asPath } = useRouter();
	const router = useRouter();
	const [data, setData] = useState();
	const [loading, setLoading] = useState(false);
	const [ seoTitle, setSeoTitle ] = useState("DevRocha");
	const [ seoDescription, setSeoDescription ] = useState();

	useEffect(() => {
		let isMounted = true;
		let abortController = new AbortController(); 
		
		if(isMounted) {
			// here you can add your aos options
			AOS.init({
				duration: 1000,
				easing: "ease-in-out",
				once: true,
				mirror: false,
			});

			//Set SEO fields
			if(props.nodeInfo){
				if(props.nodeInfo.page){
					setSeoTitle(props.nodeInfo.page.SeoTitle);
					setSeoDescription(props.description);
				}
				else if(props.nodeInfo.node){
					setSeoTitle(props.nodeInfo.node.entity.SeoTitle);
					setSeoDescription(props.description);
				}
				else {
					return;
				}
			}
			else if(props.portfolio) {
				setSeoTitle(props.portfolio.portfolio.entity.title);
				// Missing a field on backoffice to SEO Description in Portfolio node type.
				setSeoDescription("");
			}

			// Loading
			const handleStart = () => {
				setLoading(true);
			};

			const handleComplete = () => {
				setLoading(false);
			};

			setData(props.nodeInfo.page ? props.nodeInfo.page : props.nodeInfo.node.entity);

			router.events.on("routeChangeStart", handleStart);
			router.events.on("routeChangeComplete", handleComplete);
			router.events.on("routeChangeError", handleComplete);
		}

		return () => {
			isMounted = false;
			setData();
			abortController.abort();
		}
	}, [router, props]);

	if(!data){
		return <Loading/>
	};

	return (
		<>
			{loading ?
			(
				<Loading loading={loading} />
			) : (
				<div>
					<NextSeo
						config={{
							title: seoTitle,
							description: seoDescription,
							openGraph: {
								title: seoTitle,
								description: seoDescription,
							}
						}} 
					/>
					<Header
						data={data.fieldModules}
						urlEN={data.urlEN ? data.urlEN.url.path : false}
						urlPT={data.urlPT ? data.urlPT.url.path : false}
					/>

					<main>{children}</main>

					<Footer socialLinks={props.socialLinks.social} />
					<CookieNotice />
				</div>
			)}
		</>
	);
}
