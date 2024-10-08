import styled from "styled-components";

export const HeroWraper = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;

	@media (min-width: 992px) {
		padding-left: 160px;
	}
	@media (max-width: 992px) {
		text-align: center;
	}

	.background-mask {
		content: "";
		background: rgba(255, 255, 255, 0.8);
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
	}

	h1 {
		margin: 0;
		font-size: 64px;
		font-weight: 700;
		line-height: 56px;
		color: #45505b;

		@media (max-width: 992px) {
			font-size: 32px;
			line-height: 36px;
		}
	}

	p {
		color: #45505b;
		margin: 15px 0 0 0;
		font-size: 26px;
		font-family: "Poppins", sans-serif;

		@media (max-width: 992px) {
			margin-top: 10px;
			font-size: 20px;
			line-height: 24px;
		}

		span {
			color: var(--primary);
			letter-spacing: 1px;
		}
	}

	.typed-wrapper {
		min-height: 50px;
	}

	.social-links {
		margin-top: 30px;
		margin-bottom: 50px;

		a {
			font-size: 24px;
			display: inline-block;
			color: #45505b;
			line-height: 1;
			margin-right: 20px;
			transition: 0.3s;

			&:hover {
				color: var(--primary);
			}
		}
	}

`;
