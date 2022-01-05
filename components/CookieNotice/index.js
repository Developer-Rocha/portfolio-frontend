import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { CookieWrapper } from "./styles";
import i18next from 'i18next';
import { useRouter } from "next/router";
import { BASE_URL } from "../../utils/config";

function CookieNotice() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState();
  const policyURL = router.query.lang === "en" ? BASE_URL + "/en/privacy-policy" : BASE_URL + "/pt/politica-de-privacidade";

  useEffect(() => {
		let isActive = true;

		if(isActive){
			if( !Cookies.get('cookieAccept') ) {
        setIsOpen("is-open");
      }
		}

		return () => {
			isActive = false;
		}
	}, []);

  const handleCookie = () => {
    Cookies.set('cookieAccept', true, {
      expires: 7
    });

    setIsOpen("");
  }

  return (
    <CookieWrapper className={ "cookieNotice " + isOpen }>
        <div className="content">
            <p>{i18next.t('cookieText')} <a href={policyURL}>{i18next.t('privacy-policy')}</a></p>
        </div>
        <button onClick={ handleCookie } className="btn btn--default">Ok</button>
    </CookieWrapper>
  );
}

export default CookieNotice;
