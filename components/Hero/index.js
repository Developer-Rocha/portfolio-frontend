import React from "react";
import { useEffect, useRef } from "react";
import { HeroWraper } from "./styles";
import Typed from "typed.js";

function Hero({ title }) {
	// Create Ref element.
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Website", "Developer", "Freelancer", "More Strings"], // Strings to display
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
		<HeroWraper id="hero" className="d-flex flex-column justify-content-center">
			<div className="container" data-aos="zoom-in" data-aos-delay="100">
				<h1>{title}</h1>
				<p>
					I'm <span className="typed" ref={el}></span>
				</p>
				<div className="social-links">
					<a href="#" className="twitter">
						<i className="bx bxl-twitter"></i>
					</a>
					<a href="#" className="facebook">
						<i className="bx bxl-facebook"></i>
					</a>
					<a href="#" className="instagram">
						<i className="bx bxl-instagram"></i>
					</a>
					<a href="#" className="google-plus">
						<i className="bx bxl-skype"></i>
					</a>
					<a href="#" className="linkedin">
						<i className="bx bxl-linkedin"></i>
					</a>
				</div>
			</div>
		</HeroWraper>
	);
}

export default Hero;
