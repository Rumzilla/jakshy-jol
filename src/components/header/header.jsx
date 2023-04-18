import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {

    const {i18n} = useTranslation();

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
                    <a href="about-me-block" className="nav-menu-link">Обо мне</a>
                    <a href="" className="nav-menu-link">Методическое пособие</a>
                    <a href="" className="nav-menu-link">Статьи</a>
                    <a href="" className="nav-menu-link">Тест</a>
                    <Link to="/" className="lang">
                        <div className="lang-menu">
                            <button onClick={() => changeLanguage('kg')} className="lang-menu-item">Кыргызский</button>
                            <button onClick={() => changeLanguage('ru')} className="lang-menu-item">Русский</button>
                        </div>
                    </Link>
                    <a href='http://43.207.186.205:80/admin/' className="admin"></a>
                </div>
            </div>

            <div className="header-block-mobile">
                <Link to ='/' className="logo-block-mobile">
                    <span className="logo-mobile"></span>
                    <span className="logo-text-mobile"></span>
                </Link>
                <Link to="/" className="lang-mobile">
                    <div className="lang-menu">
                        <button onClick={() => changeLanguage('kg')} className="lang-menu-item">Кыргызский</button>
                        <button onClick={() => changeLanguage('ru')} className="lang-menu-item">Русский</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header