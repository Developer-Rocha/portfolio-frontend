import React, { useState, useEffect } from "react";
import { PortfolioWraper } from "./styles";

function Portfolio({portfolio}) {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let isActive = true;
		let arr = [];

		function getCategory() {
			const response = portfolio.entities.map(function(item) {
				item.category.map(function(el){
					if(!arr.includes(el.entity.name)){
						arr.push(el.entity.name);
					}
				})
				setCategories(arr);
			})
		}

		if(isActive){
			getCategory();
		}

		return () => {
			isActive = false;
		}
	}, [])


	return (
		<PortfolioWraper id="portfolio" className="portfolio section-bg">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Portfolio</h2>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
						aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
						quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
						fugiat sit in iste officiis commodi quidem hic quas.
					</p>
				</div>

				<div className="row">
					<div
						className="col-lg-12 d-flex justify-content-center"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<ul id="portfolio-flters">
							<li data-filter="*" className="filter-active">
								All
							</li>
							{categories.map((item, index) => (
								<li data-filter={`.filter-${item}`}>{item}</li>
							))}
						</ul>
					</div>
				</div>

				<div
					className="row portfolio-container"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					{portfolio.entities.map((item, index) => (
						<div key={index} className={`col-lg-4 col-md-6 portfolio-item ${item.category.map((item, key) => (
							"filter-" + item.entity.name.replace(/\s/g, "-").toLowerCase()
						)).join(' ')}`}>
							<div className="portfolio-wrap">
								<img
									src={item.fieldThumbnail.entity.fieldMediaImage.sm.url}
									className="img-fluid"
									alt=""
								/>
								<div className="portfolio-info">
									<h4>{item.client}</h4>
									<p>{item.category.map((item, key) => (
											item.entity.name
										)).join(' + ')}</p>
									<div className="portfolio-links">
										<a
											href={item.fieldThumbnail.entity.fieldMediaImage.sm.url}
											data-gallery="portfolioGallery"
											className="portfolio-lightbox"
											title="App 1"
										>
											<i className="bx bx-plus"></i>
										</a>
										<a
											href="portfolio-details.html"
											className="portfolio-details-lightbox"
											data-glightbox="type: external"
											title="Portfolio Details"
										>
											<i className="bx bx-link"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					))}


				</div>
			</div>
		</PortfolioWraper>
	);
}

export default Portfolio;
