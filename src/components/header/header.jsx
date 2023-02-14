import React from "react";

import "./header.css"

const Header = () => {
    return (
        <div className="container">
            <div className="header-block">
                <div className="logo-block">
                    <span className="logo"></span>
                    <span className="logo-text"></span>
                </div>
                <div className="social-header-block">
                    <a href="/" className="instagram-item"></a>
                    <a href="/" className="whatsapp-item"></a>
                    <a href="/" className="telegram-item"></a>
                    <span className="lang"></span>
                    <span className="admin"></span>
                </div>              
            </div>
        </div>
    )
}

export default Header