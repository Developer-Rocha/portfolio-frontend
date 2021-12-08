import React from "react";
import { AboutWraper } from "./styles";

function About({ title, description }) {

    if(!description) {
        return null;
    }

	return (
		<AboutWraper id="about" className="about">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{__html: description.value }}></div>
				</div>
			</div>
		</AboutWraper>
	);
}

export default About;
