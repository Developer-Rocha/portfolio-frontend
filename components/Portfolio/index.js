import React, { useState, useEffect } from "react";
import { PortfolioWraper, ReactModal } from "./styles";
import { useTranslation } from "next-i18next";
import Modal from 'react-modal';
import PortfolioDetail from '../PortfolioDetail';

Modal.setAppElement('#__next');

function Portfolio({portfolio}) {
	const [categories, setCategories] = useState([]);
	const { t } = useTranslation("common");

	const [modalIsOpen,setIsOpen] = useState(false);
	const [currentPortfolio, setCurrentPortfolio] = useState([]);

	const openModal = (data) => {
		setCurrentPortfolio(data);
		setIsOpen(true);
	}

	const closeModal = () => {
		setIsOpen(false);
	}

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
					<h2>{t('portfolio')}</h2>
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
								{t('all')}
							</li>
							{categories.map((item, index) => (
								<li key={index} data-filter={`.filter-${item}`}>{item}</li>
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
						<div key={index} className={`col-lg-4 col-md-6 portfolio-item ${item.category.map((item) => (
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
