import React from "react";
import Link from "next/link";
import { FooterWraper } from "./styles";

function Footer({socialLinks}) {

	return (
        <FooterWraper id="footer">
            <div className="container">
				<a className="zaask-certificate" target="_blank" href="https://www.zaask.pt/user/fabrc7" rel="noreferrer">
					<img src="https://www.zaask.pt/widget?user=253946&widget=pro-findme" alt="" />
				</a>
				<div className="social-links">
					{socialLinks.links.map((item, index) => (
						<a
							href={item.url.path}
							target="_blank"
							key={index}
							className={item.label.toLowerCase()} rel="noreferrer"
						>
							<i className={`bx bxl-${item.label.toLowerCase()}`}></i>
						</a>
					))}
				</div>
                <div className="copyright">
                    &copy; Copyright <strong><span>Developer Rocha</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <Link href="/">Developer Rocha</Link>
                </div>
            </div>
        </FooterWraper>
	);
}

export default Footer;
