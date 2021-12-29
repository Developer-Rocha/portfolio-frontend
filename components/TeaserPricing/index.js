import React from "react";

import i18next from 'i18next';

import { TeaserPricingWraper } from "./styles";

function TeaserPricing({ data }) {

	return (
		<TeaserPricingWraper id="prices">
            <div className="container" data-aos="fade-up">
				<div className="row">
					{data.pricingCards.map((item, index) => (
						<div
							className="col-lg-4 col-md-6 d-flex align-items-stretch"
							data-aos="zoom-in"
							data-aos-delay="100"
							key={index}
						>
							<div className="card">
                                <div className="card__header">
                                    <h2 className="title">
                                        {item.entity.title}
                                    </h2>
                                </div>
                                <div className="card__body">
                                    {item.entity.price ?
                                        <div className="price">
                                            <span>€ </span><p>{item.entity.price}</p><span>+ IVA</span>
                                        </div> : <p className="lead">{i18next.t('on-request')}</p>}
                                </div>
                                <div className="card__footer">
                                    <ul>
                                        { item.entity.fieldList.map((item, index) => (
                                            <li key={index}>{ item.entity.text }</li>
                                        ))}
                                    </ul>
                                </div>
							</div>
						</div>
					))}
				</div>
			</div>
		</TeaserPricingWraper>
	);
}

export default TeaserPricing;
