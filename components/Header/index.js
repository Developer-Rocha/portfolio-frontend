import React from "react";
import { MobileNavToggle, HeaderWraper } from "./styles";
import { useTranslation } from "next-i18next";

function Header(props) {
	const { t } = useTranslation("common");

	return (
		<>
			<MobileNavToggle className="bi bi-list mobile-nav-toggle d-xl-none" />
			<HeaderWraper id="header">
				<nav id="navbar" className="navbar nav-menu">
					<ul>
						<li>
							<a href="#hero" className="nav-link scrollto active">
								<i className="bx bx-home"></i> <span>{t("home")}</span>
							</a>
						</li>
						<li>
							<a href="#about" className="nav-link scrollto">
								<i className="bx bx-user"></i> <span>{t("about")}</span>
							</a>
						</li>
						<li>
							<a href="#resume" className="nav-link scrollto">
								<i className="bx bx-file-blank"></i> <span>Resume</span>
							</a>
						</li>
						<li>
							<a href="#portfolio" className="nav-link scrollto">
								<i className="bx bx-book-content"></i>{" "}
								<span>{t("portfolio")}</span>
							</a>
						</li>
						<li>
							<a href="#services" className="nav-link scrollto">
								<i className="bx bx-server"></i> <span>{t("services")}</span>
							</a>
						</li>
						<li>
							<a href="#contact" className="nav-link scrollto">
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
