import React, {useState} from "react";
import { MobileNavToggle, HeaderWraper, SwitchWrapper } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleScrollTo } from "../../utils/helpers";
import i18next from 'i18next';

function Header({ data }) {
	const router = useRouter();

	const handleMenu = (e) => {
		e.preventDefault();

		document.getElementsByTagName('body')[0].classList.toggle('mobile-nav-active');
		e.currentTarget.classList.toggle('bi-list');
		e.currentTarget.classList.toggle('bi-x');
	}

	const renderList = (id, icon, index) => {
		return(
			<li key={index} onClick={(e) => handleScrollTo(e)}>
				<a href={"#" + id} className="nav-link scrollto">
					<i className={"bx " + icon}></i> <span>{i18next.t(id)}</span>
				</a>
			</li>
		);
	}

	return (
		<>
			<MobileNavToggle onClick={(e) => handleMenu(e)} className="bi bi-list mobile-nav-toggle" />
			<SwitchWrapper>
				<Link prefetch={false} href={router.query.lang == "pt" ? "/en" : "/pt"}>
					<a className="lang_switch">
						<i className="bx bx-world"></i>
						<span>{router.query.lang === "en" ? "PT" : "EN"}</span>
					</a>
				</Link>
			</SwitchWrapper>
			<HeaderWraper id="header">
				<nav id="navbar" className="navbar nav-menu">
					<ul>
						{
							router.query.slug ?
							<li>
								<Link prefetch={false} href={"/" + router.query.lang}>
									<a className="nav-link scrollto active">
										<i className="bx bx-home"></i> <span>Home</span>
									</a>
								</Link>
							</li>

							:
							<li onClick={(e) => handleScrollTo(e)}>
								<a href="#hero" className="nav-link scrollto active">
									<i className="bx bx-home"></i> <span>Home</span>
								</a>
							</li>
						}

						{ !router.query.slug ? data.map((item, index) => {
							if(item.entity.__typename == 'ParagraphPricingTable') {
								return renderList("prices", "bx-euro", index)
							}
							if(item.entity.__typename == 'ParagraphServices') {
								return renderList("services", "bx-server", index)
							}
							if(item.entity.__typename == 'ParagraphAbout') {
								return renderList("about", "bx-user", index)
							}
							if(item.entity.__typename == 'ParagraphPortfolio') {
								return renderList("portfolio", "bx-book-content", index)
							}
							if(item.entity.__typename == 'ParagraphWebformContact') {
								return renderList("contact", "bx-envelope", index)
							}
							else {
								return null;
							}
						}) : null}
					</ul>
				</nav>
			</HeaderWraper>
		</>
	);
}

export default Header;
