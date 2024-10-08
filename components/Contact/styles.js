import styled from "styled-components";

export const ContactWraper = styled.section`
    .info {
        width: 100%;
        background: #fff;

        i {
            font-size: 20px;
            color: var(--primary);
            float: left;
            width: 44px;
            height: 44px;
            background: #eef7ff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            transition: all 0.3s ease-in-out;
        }

        h4 {
            padding: 0 0 0 60px;
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 5px;
            color: #45505b;
        }

        p {
            padding: 0 0 0 60px;
            margin-bottom: 0;
            font-size: 14px;
            color: #728394;
        }

        .email,
        .phone {
            margin-top: 40px;

            &:hover {
                i {
                    background: var(--primary);
                    color: #fff;
                }
            }
        }
    }

    .loading {
        display: none;
        background: #fff;
        text-align: center;
        height: 100%;
        justify-content: center;
        align-items: center;

        &:before {
            content: "";
            display: inline-block;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            margin: 0 10px -6px 0;
            border: 3px solid #18d26e;
            border-top-color: #eee;
            -webkit-animation: animate-loading 1s linear infinite;
            animation: animate-loading 1s linear infinite;
        }
    }

    .error-message {
        display: none;
        color: #fff;
        background: #ed3c0d;
        text-align: left;
        padding: 15px;
        font-weight: 600;

        span {
            display: block;
        }

        br + br {
            margin-top: 25px;
        }
    }

    .sent-message {
        display: none;
        color: #fff;
        background: #18d26e;
        text-align: center;
        padding: 15px;
        font-weight: 600;
    }

    .email-form {
        width: 100%;
        background: #fff;

        .form-group {
            padding-bottom: 8px;
        }

        input,
        textarea {
            border-radius: 4px;
            box-shadow: none;
            font-size: 14px;
        }

        input {
            height: 44px;
        }

        textarea {
            padding: 10px 12px;
        }

        button[type="submit"] {
            background: var(--primary);
            border: 0;
            padding: 10px 35px;
            color: #fff;
            transition: 0.4s;
            border-radius: 4px 0 4px;
            margin-top: 30px;

            &:hover {
                opacity: 0.5;
            }
        }
    }

    @-webkit-keyframes animate-loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes animate-loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
