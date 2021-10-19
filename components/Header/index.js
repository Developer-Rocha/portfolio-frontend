import React, {useState} from "react";
import { MobileNavToggle, HeaderWraper } from "./styles";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

function Header(props) {
	const { t } = useTranslation("common");
	const router = useRouter();

	// const [active, setActive] = useState();

	const handleActive = (e) => {
		let navbarlinks = document.getElementsByClassName('scrollto');
		let array = [... navbarlinks]

		array.map((item) => (
			item.classList.contains('active') ? item.classList.remove('active') : null
		))
		e.currentTarget .classList.add('active');
	}

	return (
		<>
			<MobileNavToggle className="bi bi-list mobile-nav-toggle d-xl-none" />
			<HeaderWraper id="header">
				<nav id="navbar" className="navbar nav-menu">
					<ul>
						<li>
							<a onClick={handleActive} href="#hero" className="nav-link scrollto active">
								<i className="bx bx-home"></i> <span>{t("home")}</span>
							</a>
						</li>
						{/* <li>
							<a href="#about" className="nav-link scrollto">
								<i className="bx bx-user"></i> <span>{t("about")}</span>
							</a>
						</li> */}
						<li>
							<a onClick={handleActive} href="#services" className="nav-link scrollto">
								<i className="bx bx-server"></i> <span>{t("services")}</span>
							</a>
						</li>
						<li>
							<a onClick={handleActive} href="#portfolio" className="nav-link scrollto">
								<i className="bx bx-book-content"></i>
								<span>{t("portfolio")}</span>
							</a>
						</li>
						<li>
							<a onClick={handleActive} href="#contact" className="nav-link scrollto">
								<i className="bx bx-envelope"></i> <span>{t("contact")}</span>
							</a>
						</li>
						<li>
							<Link href="/" locale={router.locale === "en" ? "pt-PT" : "en"}>
								<a className="nav-link scrollto">
									<i className="bx bx-world"></i>
									<span>{router.locale === "en" ? "PT" : "EN"}</span>
								</a>
							</Link>
						</li>
					</ul>
				</nav>
			</HeaderWraper>
		</>
	);
}

export default Header;
