import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { CookieWrapper } from "./styles";
import i18next from 'i18next';

function CookieNotice() {
  const [isOpen, setIsOpen] = useState("is-open");

  useEffect(() => {
		let isActive = true;

		if(isActive){
			if( Cookies.get('cookieAccept') ) {
        setIsOpen("");
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
            {i18next.t('cookieText')}
        </div>
        <button onClick={ handleCookie } className="btn btn--default">Ok</button>
    </CookieWrapper>
  );
}

export default CookieNotice;
