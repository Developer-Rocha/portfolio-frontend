import React, {useState} from "react";
import { MobileNavToggle, HeaderWraper, SwitchWrapper } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

import i18next from 'i18next';
import { languages } from '../../i18n/config';

function Header(props) {
	const router = useRouter();
	const { pathname } = router;

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
			<MobileNavToggle onClick={(e) => handleMenu(e)} className="bi bi-list mobile-nav-toggle" />
			<SwitchWrapper>
				{languages.map((lang, index) => {

					if(lang !== i18next.language) {
						const path = pathname.replace(/\[lang\]/i, lang);

						return (
							<Link key={index} prefetch={false} href={pathname} as={path}>
								<a className="lang_switch">
									<i className="bx bx-world"></i>
									<span>{i18next.language === "en" ? "PT" : "EN"}</span>
								</a>
							</Link>
						);
					}

				})}
			</SwitchWrapper>
			<HeaderWraper id="header">
				<nav id="navbar" className="navbar nav-menu">
					<ul>
						<li>
							<a onClick={(e) => handleCloseMenu(e)} href="#hero" className="nav-link scrollto active">
								<i className="bx bx-home"></i> <span>Home</span>
							</a>
						</li>
						<li>
							<a onClick={(e) => handleCloseMenu(e)} href="#about" className="nav-link scrollto">
								<i className="bx bx-user"></i> <span>{i18next.t('about')}</span>
							</a>
						</li>
						<li>
							<a onClick={(e) => handleCloseMenu(e)} href="#services" className="nav-link scrollto">
								<i className="bx bx-server"></i> <span>{i18next.t('services')}</span>
							</a>
						</li>
						<li>
							<a onClick={(e) => handleCloseMenu(e)} href="#portfolio" className="nav-link scrollto">
								<i className="bx bx-book-content"></i>
								<span>{i18next.t('portfolio')}</span>
							</a>
						</li>
						<li>
							<a onClick={(e) => handleCloseMenu(e)} href="#contact" className="nav-link scrollto">
								<i className="bx bx-envelope"></i> <span>{i18next.t('contact')}</span>
							</a>
						</li>
					</ul>
				</nav>
			</HeaderWraper>
		</>
	);
}

export default Header;
