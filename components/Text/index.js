import React from "react";
import { TextWraper } from "./styles";

function Text({ data }) {


    if(!data.fieldText) {
        return null;
    }

	return (
		<TextWraper id="text" className="text">
			<div className="container" data-aos="fade-up">
				<div className="section-text">
                    <div dangerouslySetInnerHTML={{__html: data.fieldText.value }}></div>
				</div>
			</div>
		</TextWraper>
	);
}

export default Text;
