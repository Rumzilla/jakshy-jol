import React from "react";
import { Link } from "react-router-dom";

import "./header.css"

const Header = () => {
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
                    <Link to='/' className="lang"></Link>
                    <Link to='/' className="admin"></Link>
                </div>              
            </div>
        </div>
    )
}

export default Header