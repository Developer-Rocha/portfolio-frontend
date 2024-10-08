import React, { useState, useEffect, useRef } from "react";
import { PortfolioWraper } from "./styles";
import Modal from "react-modal";
import PortfolioDetail from "../PortfolioDetail";
import i18next from "i18next";

Modal.setAppElement('#__next');

function Portfolio({portfolio}) {
	const [filters, setFilters] = useState([]);
	const [currentFilter, setCurrentFilter] = useState('*');
	const [portfolios, setPortfolios ] = useState(portfolio);
	const [height, setHeight] = useState();
	const el = useRef(null);

	// For Modal
	const [modalIsOpen,setIsOpen] = useState(false);
	const [currentPortfolio, setCurrentPortfolio] = useState([]);

	useEffect(() => {
		let isActive = true;
		let arr = [];

		let portfolioHeight = el.current.offsetHeight;
		setHeight(portfolioHeight);

		function getCategory() {
			const response = portfolio.map(function(item) {
				item.entity.category.map(function(el){
					if(!arr.includes(el.entity.name)){
						arr.push(el.entity.name);
					}
				})
				setFilters(arr);
			})
		}

		if(isActive){
			getCategory();
		}

		return () => {
			isActive = false;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const openModal = (data) => {
		setCurrentPortfolio(data);
		setIsOpen(true);
	}

	const closeModal = () => {
		setIsOpen(false);
	}

	const filter = (filterSelected) => {
		if(filterSelected !== currentFilter) {
			let portfolioFiltered = [];

			if(filterSelected !== "*") {
				portfolio.map((item) => {
					item.entity.category.filter(row => {
						if(row.entity.name === filterSelected) {
							portfolioFiltered.push(item);
						}
					});
				})
				setPortfolios(portfolioFiltered);
			}
			else {
				setPortfolios(portfolio);
			}
			setCurrentFilter(filterSelected);
		}
	}

	return (
		<PortfolioWraper id="portfolio" className="portfolio section-bg">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>{i18next.t('portfolio')}</h2>
				</div>

				<div className="row">
					<div
						className="col-lg-12 d-flex justify-content-center"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<ul id="portfolio-flters">
							<li onClick={() => filter("*")} className="filter-active">
								{i18next.t('all')}
							</li>
							{filters.map((f, index) => (
								<li key={index} onClick={() => filter(f)}>{f}</li>
							))}
						</ul>
					</div>
				</div>

				<div
					style={{ minHeight: height }}
					className="row portfolio-container"
					ref={el}
				>
					{portfolios ?
					portfolios.map((item, index) => (
						<div
						key={index}
						data-aos="zoom-in"
						data-aos-delay="100"
						className="col-lg-4 col-md-6 portfolio-item">
							<div className="portfolio-wrap">
								{
									item.entity.fieldThumbnail ?
									<img
										src={item.entity.fieldThumbnail.entity.fieldMediaImage.sm.url}
										className="img-fluid"
										alt=""
									/>
									: null
								}

								<div className="portfolio-info">
									<h4>{item.entity.client}</h4>
									<p>{item.entity.category.map((item, key) => (
											item.entity.name
										)).join(' + ')}</p>
									<div className="portfolio-links">
										<a
											onClick={() => openModal(item.entity)}
											title="Portfolio Details"
										>
											<i className="bx bx-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					)) : null}
				</div>
			</div>

			<Modal
				className="Modal"
				overlayClassName="Overlay"
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
				closeTimeoutMS={500}>

				<button className="close-modal-button" onClick={closeModal}>X</button>
				<PortfolioDetail data={currentPortfolio} />
			</Modal>

		</PortfolioWraper>
	);
}

export default Portfolio;
