import React from "react";
import { useEffect } from "react";

import AOS from "aos";

// Components
import Header from "./Header";
import Hero from "./Hero";

export default function Layout({ children, data, props }) {
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
			<div>
				<Header />

				<Hero
					title={data.title}
					typedAnimation={data.fieldTypedAnimation}
					socialLinks={props.socialLinks.social}
				/>

				<main>{children}</main>
			</div>
		</>
	);
}
