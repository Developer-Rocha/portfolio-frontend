import React, {useState} from "react";
import { MobileNavToggle, HeaderWraper, SwitchWrapper } from "./styles";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

function Header(props) {
	const { t } = useTranslation("common");
	const router = useRouter();

	const handleMenu = (e) => {
		e.preventDefault();

		document.getElementsByTagName('body')[0].classList.toggle('mobile-nav-active');
		e.currentTarget.classList.toggle('bi-list');
		e.currentTarget.classList.toggle('bi-x');
	}

	const handleCloseMenu = (e) => {

		let body = document.getElementsByTagName('body')[0];

		if(body.classList.contains('mobile-nav-active')) {
			let navbarToggle = document.getElementsByClassName('mobile-nav-toggle');
			navbarToggle[0].classList.toggle('bi-list');
			navbarToggle[0].classList.toggle('bi-x');
			body.classList.remove('mobile-nav-active');

		}
	}

	return (
		<>
			<MobileNavToggle onClick={(e) => handleMenu(e)} className="bi bi-list mobile-nav-toggle d-xl-none" />
			<SwitchWrapper>
				<Link href="/" locale={router.locale === "en" ? "pt-PT" : "en"}>
					<a className="lang_switch">
						<i className="bx bx-world"></i>
						<span>{router.locale === "en" ? "PT" : "EN"}</span>
					</a>
				</Link>
			</SwitchWrapper>
			<HeaderWraper id="header">
				<nav id="navbar" className="navbar nav-menu">
					<ul>
						<li>
							<a onClick={(e) => handleCloseMenu(e)} href="#hero" className="nav-link scrollto active">
								<i className="bx bx-home"></i> <span>{t("home")}</span>
							</a>
						</li>
						{/* <li>
							<a href="#about" className="nav-link scrollto">
								<i className="bx bx-user"></i> <span>{t("about")}</span>
							</a>
						</li> */}
						<li>
							<a onClick={(e) => handleCloseMenu(e)} href="#services" className="nav-link scrollto">
								<i className="bx bx-server"></i> <span>{t("services")}</span>
							</a>
						</li>
						<li>
							<a onClick={(e) => handleCloseMenu(e)} href="#portfolio" className="nav-link scrollto">
								<i className="bx bx-book-content"></i>
								<span>{t("portfolio")}</span>
							</a>
						</li>
						<li>
							<a onClick={(e) => handleCloseMenu(e)} href="#contact" className="nav-link scrollto">
								<i className="bx bx-envelope"></i> <span>{t("contact")}</span>
							</a>
						</li>
					</ul>
				</nav>
			</HeaderWraper>
		</>
	);
}

export default Header;
