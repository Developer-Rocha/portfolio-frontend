import styled from "styled-components";

export const FooterWraper = styled.footer`
    background: #f7f8f9;
    color: #45505b;
    font-size: 14px;
    text-align: center;
    padding: 30px 0;

    h3 {
        font-size: 36px;
        font-weight: 700;
        position: relative;
        font-family: "Poppins", sans-serif;
        padding: 0;
        margin: 0 0 15px 0;
    }

    p {
        font-size: 15;
        font-style: italic;
        padding: 0;
        margin: 0 0 40px 0;
    }

    .social-links {
        margin: 0 0 40px 0;

        a {
            font-size: 18px;
            display: inline-block;
            background: var(--primary);
            color: #fff;
            line-height: 1;
            padding: 8px 0;
            margin-right: 4px;
            border-radius: 50%;
            text-align: center;
            width: 36px;
            height: 36px;
            transition: 0.3s;

            &:hover {
                background: #0678e3;
                color: #fff;
                text-decoration: none;
            }
        }
    }

    .copyright {
        margin: 0 0 5px 0;
    }

    .credits {
        font-size: 13px;
    }
`;
