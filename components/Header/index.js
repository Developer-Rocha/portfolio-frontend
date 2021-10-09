import React from "react";
import styled from "styled-components";

const HeaderWraper = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 9997;
	transition: all 0.5s;
	padding: 15px;
	overflow-y: auto;

	@media (max-width: 992px) {
		width: 300px;
		background: #fff;
		border-right: 1px solid #e6e9ec;
		left: -300px;
	}

	nav {
		padding: 0;
		display: block;

		* {
			margin: 0;
			padding: 0;
			list-style: none;
		}

		li {
			position: relative;
			white-space: nowrap;
		}

		a,
		a:focus {
			display: flex;
			align-items: center;
			color: #45505b;
			padding: 10px 18px;
			margin-bottom: 8px;
			transition: 0.3s;
			font-size: 15px;
			border-radius: 50px;
			background: #f2f3f5;
			height: 56px;
			width: 100%;
			overflow: hidden;
			transition: 0.3s;

			i {
				font-size: 20px;
			}

			span {
				padding: 0 5px 0 7px;
				color: #45505b;
			}
		}

		a {
			&:hover {
				color: #fff;
				background: #0563bb;
				width: 100%;
				color: #fff;
				span {
					color: #fff;
					display: block;
				}
			}
		}
		.active {
			color: #fff;
			background: #0563bb;
			&:focus {
				color: #fff;
				background: #0563bb;
				span {
					color: #fff;
				}
			}
			span {
				color: #fff;
			}
		}
		li {
			&:hover {
				> a {
					color: #fff;
					background: #0563bb;
					width: 100%;
					color: #fff;
					span {
						color: #fff;
						display: block;
					}
				}
			}
		}
	}

	@media (min-width: 992px) {
		nav {
			a,
			a:focus {
				width: 56px;

				span {
					display: none;
					color: #fff;
				}
			}
		}
	}
`;

const MobileNavToggle = styled.i`
	position: fixed;
	right: 10px;
	top: 10px;
	z-index: 9998;
	border: 0;
	background: none;
	font-size: 28px;
	transition: all 0.4s;
	outline: none !important;
	line-height: 0;
	cursor: pointer;
	border-radius: 50px;
	padding: 5px;
	color: #45505b;
`;

function Header(props) {
	return (
		<>
			<MobileNavToggle className="bi bi-list mobile-nav-toggle d-xl-none" />
			<HeaderWraper id="header">
				<nav id="navbar" className="navbar nav-menu">
					<ul>
						<li>
							<a href="#hero" className="nav-link scrollto active">
								<i className="bx bx-home"></i> <span>Home</span>
							</a>
						</li>
						<li>
							<a href="#about" className="nav-link scrollto">
								<i className="bx bx-user"></i> <span>About</span>
							</a>
						</li>
						<li>
							<a href="#resume" className="nav-link scrollto">
								<i className="bx bx-file-blank"></i> <span>Resume</span>
							</a>
						</li>
						<li>
							<a href="#portfolio" className="nav-link scrollto">
								<i className="bx bx-book-content"></i> <span>Portfolio</span>
							</a>
						</li>
						<li>
							<a href="#services" className="nav-link scrollto">
								<i className="bx bx-server"></i> <span>Services</span>
							</a>
						</li>
						<li>
							<a href="#contact" className="nav-link scrollto">
								<i className="bx bx-envelope"></i> <span>Contact</span>
							</a>
						</li>
					</ul>
				</nav>
			</HeaderWraper>
		</>
	);
}

export default Header;
