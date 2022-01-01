import React from "react";
import Image from 'next/image'
import { HeroWraper } from "./styles";

function GenericHero({ title, socialLinks, backgroundImage }) {
	const backgroundURL = backgroundImage.entity ? backgroundImage.entity.fieldMediaImage.lg.url : NULL;

	return (
		<HeroWraper id="hero" className="d-flex flex-column justify-content-center">
			<Image
			alt="Developer Rocha Background"
			src={backgroundURL}
			layout="fill"
			objectFit="cover"
			quality={90}
			/>
			<div className="background-mask"></div>
			<div className="container" data-aos="zoom-in" data-aos-delay="100">
				<h1>{title}</h1>

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
			</div>
		</HeroWraper>
	);
}

export default GenericHero;
