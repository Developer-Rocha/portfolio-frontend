import React, {useState} from "react";
import { MobileNavToggle, HeaderWraper, SwitchWrapper } from "./styles";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

function Header(props) {
	const { t } = useTranslation("common");
	const router = useRouter();

	return (
		<>
			<MobileNavToggle className="bi bi-list mobile-nav-toggle d-xl-none" />
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
							<a href="#hero" className="nav-link scrollto active">
								<i className="bx bx-home"></i> <span>{t("home")}</span>
							</a>
						</li>
						{/* <li>
							<a href="#about" className="nav-link scrollto">
								<i className="bx bx-user"></i> <span>{t("about")}</span>
							</a>
						</li> */}
						<li>
							<a href="#services" className="nav-link scrollto">
								<i className="bx bx-server"></i> <span>{t("services")}</span>
							</a>
						</li>
						<li>
							<a href="#portfolio" className="nav-link scrollto">
								<i className="bx bx-book-content"></i>
								<span>{t("portfolio")}</span>
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
