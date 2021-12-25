import styled from "styled-components";

export const TeaserPricingWraper = styled.section`
    .card {
        width: 100%;
        text-align: center;

        &__header {
            padding: 15px;
            background-color: var(--primary);
            color: #FFF;

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

            .lead {
                font-size: 2.5rem;
                font-weight: bold;
            }
        }
    }

    ul {
        padding: 30px 0;
        margin: 0;
        display: inline-block;

        li {
            text-align: left;

            &::marker {
                color: var(--primary);
            }
        }
    }
`;
