import React, { useEffect } from "react";
import { ModalContentWrapper } from './styles';

function ModalContent({data}) {

    // useEffect(() => {
	// 	let isActive = true;



	// 	if(isActive){
	// 		getCategory();
	// 	}

	// 	return () => {
	// 		isActive = false;
	// 	}
	// }, [])

    return(
        <ModalContentWrapper id="portfolio-details" className="portfolio-details">
            <div className="container">
                <div className="row gy-4">
                <div className="col-lg-8">
                    {data.fieldGallery.length ?

                    <div className="portfolio-details-slider swiper">
                        <div className="swiper-wrapper align-items-center">

                            <div className="swiper-slide">
                                <img src="assets/img/portfolio/portfolio-details-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div> :

                    <div className="portfolio-details-slider">
                        <div className="align-items-center">

                            <div className="image">
                                <img src={data.fieldThumbnail.entity.fieldMediaImage.sm.url} alt="" />
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    }

                </div>

                <div className="col-lg-4">
                    <div className="portfolio-info">
                        <h3>{data.client}</h3>
                        <ul>
                            <li><strong>Category</strong>: {data.category.map((item) => (
											item.entity.name
										)).join(', ')}</li>
                            <li><strong>Client</strong>: {data.client}</li>
                            <li><strong>Project date</strong>: {data.date.value}</li>
                            <li><strong>Project URL</strong>: <a target="_blank" href={data.url.url.path}>{data.client}</a></li>
                        </ul>
                    </div>
                    <div className="portfolio-description">
                        <h2>Detail</h2>
                        <div dangerouslySetInnerHTML={{__html: data.description.value }}></div>
                    </div>
                </div>
                </div>
            </div>
        </ModalContentWrapper>
    );

}
export default ModalContent;
