import styled from "styled-components";

export const TeaserPricingWraper = styled.section`
    .card {
        width: 100%;
        text-align: center;
        border: none;
        transition: all ease-in-out 0.3s;
        box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.05);
        margin-bottom: 30px;

        &:hover {
            box-shadow: 0px 0 35px 0 rgba(0, 0, 0, 0.08);
        }

        &__header {
            padding: 15px;
            background-color: var(--primary);
            color: #FFF;

            @media screen and (min-width: 769px) {
                min-height: 20%;
            }

            .title {
                font-weight: bold;
            }
        }

        &__body {
            padding: 15px;
            border-bottom: 1px solid rgba(0,0,0,.125);

            .price {
                display: flex;
                justify-content: center;
                align-items: baseline;

                p {
                    font-size: 3rem;
                    font-weight: bold;
                    margin: 0;
                }

                span {
                    font-size: 1.5rem;
                    margin: 0 5px;
                }
            }

            .no-iva {
                font-size: 0.8rem;
            }

            .lead {
                font-size: 2.5rem;
                font-weight: bold;
            }
        }
    }

    ul {
        padding: 30px 60px;
        margin: 0;
        display: inline-block;

        li {
            text-align: left;
            margin-bottom: 20px;

            &::marker {
                color: var(--primary);
            }
        }
    }
`;
