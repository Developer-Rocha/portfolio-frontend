import React from "react";
import { useEffect, useRef } from "react";
import { HeroWraper } from "./styles";
import Typed from "typed.js";
import i18next from 'i18next';
import { handleScrollTo } from "../../utils/helpers";

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<HeroWraper id="hero" style={{backgroundImage: "url(" + backgroundURL +")"}} className="d-flex flex-column justify-content-center">
			<div className="container" data-aos="zoom-in" data-aos-delay="100">
				<h1>{title}</h1>
				<p className="typed-wrapper">
					{staticText} <span className="typed" ref={el}></span>
				</p>
				<div className="social-links">
					{socialLinks.links.map((item, index) => (
						<a
							href={item.url.path}
							target="_blank"
							key={index}
							className={item.label.toLowerCase()}
							rel="noreferrer"
						>
							<i className={`bx bxl-${item.label.toLowerCase()}`}></i>
						</a>
					))}
				</div>
				<a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="btn btn--default">{i18next.t('ask-for-quote')}</a>
			</div>
		</HeroWraper>
	);
}

export default Hero;
