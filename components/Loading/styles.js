import styled from "styled-components";


export const LoadinghWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .lds_ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;

        div {
            position: absolute;
            top: 33px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: var(--primary);
            animation-timing-function: cubic-bezier(0, 1, 1, 0);

            &:nth-child(1) {
            left: 8px;
                animation: lds_ellipsis1 0.6s infinite;
            }

            &:nth-child(2) {
            left: 8px;
                animation: lds_ellipsis2 0.6s infinite;
            }

            &:nth-child(3) {
            left: 32px;
                animation: lds_ellipsis2 0.6s infinite;
            }

            :nth-child(4) {
            left: 56px;
                animation: lds_ellipsis3 0.6s infinite;
            }
        }
    }

    @keyframes lds_ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes lds_ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }

    @keyframes lds_ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }
`;

