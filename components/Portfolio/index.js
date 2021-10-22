import React, { useState, useEffect, useRef } from 'react';
import { PortfolioWraper } from './styles';
import { useTranslation } from 'next-i18next';
import Modal from 'react-modal';
import PortfolioDetail from '../PortfolioDetail';

Modal.setAppElement('#__next');

function Portfolio({portfolio}) {
	const { t } = useTranslation("common");
	const [filters, setFilters] = useState([]);
	const [currentFilter, setCurrentFilter] = useState('*');
	const [portfolios, setPortfolios ] = useState(portfolio.entities);
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
			const response = portfolio.entities.map(function(item) {
				item.category.map(function(el){
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
				portfolio.entities.map((item) => {
					item.category.filter(row => {
						if(row.entity.name === filterSelected) {
							portfolioFiltered.push(item);
						}
					});
				})
				setPortfolios(portfolioFiltered);
			}
			else {
				setPortfolios(portfolio.entities);
			}
			setCurrentFilter(filterSelected);
		}
	}

	return (
		<PortfolioWraper id="portfolio" className="portfolio section-bg">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>{t('portfolio')}</h2>
				</div>

				<div className="row">
					<div
						className="col-lg-12 d-flex justify-content-center"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<ul id="portfolio-flters">
							<li onClick={() => filter("*")} className="filter-active">
								{t('all')}
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
					{portfolios.map((item, index) => (
						<div
						key={index}
						data-aos="zoom-in"
						data-aos-delay="100"
						className="col-lg-4 col-md-6 portfolio-item">
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
											onClick={() => openModal(item)}
											title="Portfolio Details"
										>
											<i className="bx bx-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
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
