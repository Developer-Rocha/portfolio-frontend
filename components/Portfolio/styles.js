import styled from "styled-components";

export const PortfolioWraper = styled.section`
	.portfolio-item {
		margin-bottom: 30px;
	}
	#portfolio-flters {
		padding: 0;
		margin: 0 auto 25px auto;
		list-style: none;
		text-align: center;
		background: #fff;
		border-radius: 50px;
		padding: 2px 15px;
		li {
			cursor: pointer;
			display: inline-block;
			padding: 10px 15px;
			font-size: 14px;
			font-weight: 600;
			line-height: 1;
			text-transform: uppercase;
			color: #272829;
			margin-bottom: 5px;
			transition: all 0.3s ease-in-out;
			&:hover {
				color: #0563bb;
			}
			&:last-child {
				margin-right: 0;
			}
		}
		li.filter-active {
			color: #0563bb;
		}
	}
	.portfolio-wrap {
		transition: 0.3s;
		position: relative;
		overflow: hidden;
		z-index: 1;
		&::before {
			content: "";
			background: rgba(255, 255, 255, 0.7);
			position: absolute;
			left: 30px;
			right: 30px;
			top: 30px;
			bottom: 30px;
			transition: all ease-in-out 0.3s;
			z-index: 2;
			opacity: 0;
		}
		.portfolio-info {
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			text-align: center;
			z-index: 3;
			transition: all ease-in-out 0.3s;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			&::before {
				display: block;
				content: "";
				width: 48px;
				height: 48px;
				position: absolute;
				top: 35px;
				left: 35px;
				border-top: 3px solid #d7dce1;
				border-left: 3px solid #d7dce1;
				transition: all 0.5s ease 0s;
				z-index: 9994;
			}
			&::after {
				display: block;
				content: "";
				width: 48px;
				height: 48px;
				position: absolute;
				bottom: 35px;
				right: 35px;
				border-bottom: 3px solid #d7dce1;
				border-right: 3px solid #d7dce1;
				transition: all 0.5s ease 0s;
				z-index: 9994;
			}
			h4 {
				font-size: 20px;
				color: #45505b;
				font-weight: 600;
			}
			p {
				color: #45505b;
				font-size: 14px;
				text-transform: uppercase;
				padding: 0;
				margin: 0;
			}
		}
		.portfolio-links {
			text-align: center;
			z-index: 4;
			cursor: pointer;

			a {
				color: #45505b;
				margin: 0 2px;
				font-size: 28px;
				display: inline-block;
				transition: 0.3s;
				&:hover {
					color: #148af9;
				}
			}
		}
		&:hover {
			&::before {
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				opacity: 1;
			}
			.portfolio-info {
				opacity: 1;
				&::before {
					top: 15px;
					left: 15px;
				}
				&::after {
					bottom: 15px;
					right: 15px;
				}
			}
		}
	}
`;
