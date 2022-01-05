import styled from "styled-components";


export const CookieWrapper = styled.div`
    position: fixed;
    width: 100%;
    padding: 20px 30px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 500;
    background: #FFF;
    justify-content: space-evenly;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
    display: none;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    &.is-open {
        display: flex;
    }

    .content {
        display: flex;
        align-items: center;
    }

    button {
        padding: 5px 45px;

        @media screen and (max-width: 768px) {
            width: fit-content;
            margin-top: 20px;
        }
    }

    p {
        margin-bottom: 0;
    }
`;

