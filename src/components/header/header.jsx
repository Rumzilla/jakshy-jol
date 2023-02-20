import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {

    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div className="container">
            <div className="header-block">
                <Link to ='/' className="logo-block">
                    <span className="logo"></span>
                    <span className="logo-text"></span>
                </Link>
                <div className="social-header-block">
                    <a href="/" className="instagram-item"></a>
                    <a href="/" className="whatsapp-item"></a>
                    <a href="/" className="telegram-item"></a>
                    <Link to='/' onClick={() => changeLanguage('kg')} className="lang"></Link>
                    <Link to='/' className="admin"></Link>
                </div>              
            </div>
        </div>
    )
}

export default Header