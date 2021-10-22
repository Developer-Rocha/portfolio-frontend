import React from "react";
import { useTranslation } from "next-i18next";

// import { useEffect, useRef } from "react";
import { ServicesWraper } from "./styles";

function Services({ data, description }) {
	const { t } = useTranslation("common");
	// useEffect(() => {

	// 	// Destropying
	// 	return () => {
	// 	};
	// }, []);

	return (
		<ServicesWraper id="services" className="services">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>{t("services")}</h2>
					<p>{description}</p>
				</div>

				<div className="row">
					{data.map((item, index) => (
						<div
							className="col-lg-4 col-md-6 d-flex align-items-stretch"
							data-aos="zoom-in"
							data-aos-delay="100"
							key={index}
						>
							<div className={`icon-box iconbox-${item.entity.fieldColor}`}>
								<div className="icon">
									<svg
										width="100"
										height="100"
										viewBox="0 0 600 600"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke="none"
											strokeWidth="0"
											fill="#f5f5f5"
											d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
										></path>
									</svg>
									<i className={`bx ${item.entity.fieldIcon}`}></i>
								</div>
								<h4>
									<a href="">{item.entity.fieldTitle}</a>
								</h4>
								<p>{item.entity.fieldDescription}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</ServicesWraper>
	);
}

export default Services;
