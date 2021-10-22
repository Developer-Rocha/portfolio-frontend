import React from "react";
import { FooterWraper } from "./styles";

function Footer({socialLinks}) {

	return (
        <FooterWraper id="footer">
            <div className="container">
                <div className="social-links">
					{socialLinks.links.map((item, index) => (
						<a
							href={item.url.path}
							target="_blank"
							key={index}
							className={item.label.toLowerCase()}
						>
							<i className={`bx bxl-${item.label.toLowerCase()}`}></i>
						</a>
					))}
				</div>
                <div className="copyright">
                    &copy; Copyright <strong><span>Developer Rocha</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="/">Developer Rocha</a>
                </div>
            </div>
        </FooterWraper>
	);
}

export default Footer;
