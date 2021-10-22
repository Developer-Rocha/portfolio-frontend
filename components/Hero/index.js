import React from "react";
import { useEffect, useRef } from "react";
import { HeroWraper } from "./styles";
import Typed from "typed.js";

function Hero({ title, typedAnimation, socialLinks, backgroundImage }) {
	// Create Ref element.
	const el = useRef(null);
	const staticText = typedAnimation.entity.fieldStaticText;

	const typedArray = typedAnimation.entity.fieldTypedItem.map((item) => {
		return item.entity.fieldTextItem;
	});

	const backgroundURL = backgroundImage.entity ? backgroundImage.entity.fieldMediaImage.lg.url : NULL;

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: typedArray, // Strings to display
			// Speed settings, try diffrent values untill you get good results
			startDelay: 300,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000,
			loop: true,
		});

		// Destropying
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<HeroWraper id="hero" style={{backgroundImage: "url(" + backgroundURL +")"}} className="d-flex flex-column justify-content-center">
			<div className="container" data-aos="zoom-in" data-aos-delay="100">
				<h1>{title}</h1>
				<p>
					{staticText} <span className="typed" ref={el}></span>
				</p>
				<div className="social-links">
					{socialLinks.links.map((item, index) => (
						<a
							href={item.url.path}
							target="_blank"
							key={index}
							className={item.label.toLowerCase()}
						>
							<i className={`bx bxl-${item.label.toLowerCase()}`}></i>
						</a>
					))}
				</div>
			</div>
		</HeroWraper>
	);
}

export default Hero;
