import styled from "styled-components";

export const ServicesWraper = styled.section`
	.row {
		justify-content: center;
	}
	.icon-box {
		text-align: center;
		padding: 70px 20px 80px 20px;
		transition: all ease-in-out 0.3s;
		background: #fff;
		box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.05);
		width: 100%;
		margin-bottom: 20px;

		.icon {
			margin: 0 auto;
			width: 100px;
			height: 100px;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: ease-in-out 0.3s;
			position: relative;
			i {
				font-size: 36px;
				transition: 0.5s;
				position: relative;
			}
			svg {
				position: absolute;
				top: 0;
				left: 0;
				path {
					transition: 0.5s;
					fill: #f5f5f5;
				}
			}
		}
		h4 {
			font-weight: 600;
			margin: 10px 0 15px 0;
			font-size: 22px;
			a {
				color: #45505b;
				transition: ease-in-out 0.3s;
			}
		}
		p {
			line-height: 24px;
			font-size: 14px;
			margin-bottom: 0;
		}
		&:hover {
			border-color: #fff;
			box-shadow: 0px 0 35px 0 rgba(0, 0, 0, 0.08);
		}
	}
	.iconbox-blue {
		i {
			color: #47aeff;
		}
		&:hover {
			.icon {
				i {
					color: #fff;
				}
				path {
					fill: #47aeff;
				}
			}
		}
	}
	.iconbox-orange {
		i {
			color: #ffa76e;
		}
		&:hover {
			.icon {
				i {
					color: #fff;
				}
				path {
					fill: #ffa76e;
				}
			}
		}
	}
	.iconbox-pink {
		i {
			color: #e80368;
		}
		&:hover {
			.icon {
				i {
					color: #fff;
				}
				path {
					fill: #e80368;
				}
			}
		}
	}
	.iconbox-yellow {
		i {
			color: #ffbb2c;
		}
		&:hover {
			.icon {
				i {
					color: #fff;
				}
				path {
					fill: #ffbb2c;
				}
			}
		}
	}
	.iconbox-red {
		i {
			color: #ff5828;
		}
		&:hover {
			.icon {
				i {
					color: #fff;
				}
				path {
					fill: #ff5828;
				}
			}
		}
	}
	.iconbox-teal {
		i {
			color: #11dbcf;
		}
		&:hover {
			.icon {
				i {
					color: #fff;
				}
				path {
					fill: #11dbcf;
				}
			}
		}
	}
`;
