import styled from "styled-components";

export const ModalContentWrapper = styled.div`
    padding-top: 40px;

    .portfolio-details-slider {
        img {
            width: 100%;
            max-height: 450px;
            object-fit: contain;
        }

        .swiper-pagination {
            margin-top: 20px;
            position: relative;

            .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background-color: #fff;
                opacity: 1;
                border: 1px solid var(--primary);
            }

            .swiper-pagination-bullet-active {
                background-color: var(--primary);
            }
        }
    }

    .portfolio-info {
        padding: 30px;
        box-shadow: 0px 0 30px rgba(69, 80, 91, 0.08);

        h3 {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }

        ul {
            list-style: none;
            padding: 0;
            font-size: 15px;

            li {
                margin-top: 10px;
            }
        }
    }

    .portfolio-description {
        padding-top: 30px;

        h2 {
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        p {
            padding: 0;
        }
    }
`;
