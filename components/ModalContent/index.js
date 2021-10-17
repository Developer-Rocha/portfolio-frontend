import React, { useEffect } from "react";
import { ModalContentWrapper } from './styles';

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ModalContent({data}) {

    useEffect(() => {
        // configure Swiper to use modules
        Swiper.use([Navigation, Pagination]);

        new Swiper('.portfolio-details-slider', {
            speed: 400,
            loop: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            }
        });

	}, [])

    return(
        <ModalContentWrapper id="portfolio-details" className="portfolio-details">
            <div className="container">
                <div className="row gy-4">
                <div className="col-lg-8">
                    {data.fieldGallery.length ?

                    <div className="portfolio-details-slider swiper">
                        <div className="swiper-wrapper align-items-center">
                            {data.fieldGallery.map((item, index) => (
                                <div key={index} className="swiper-slide">
                                    <img src={item.entity.fieldMediaImage.lg.url} alt={item.entity.fieldMediaImage.alt} />
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div> :

                    <div className="portfolio-details-slider">
                        <div className="align-items-center">
                            <div className="image">
                                <img src={data.fieldThumbnail.entity.fieldMediaImage.sm.url} alt={data.fieldThumbnail.entity.fieldMediaImage.alt} />
                            </div>
                        </div>
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
