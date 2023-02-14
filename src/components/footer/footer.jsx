import React from "react";


import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer-block">
            <div className="container">
                <div className="nav-block">
                    <div className="social-menu">
                        <a href="/" className="instagram-item"></a>
                        <a href="/" className="whatsapp-item"></a>
                        <a href="/" className="telegram-item"></a>
                    </div>
                    <a href="#" className="logo-footer"></a>
                    <div className="phone">
                        <span className="phone-icon"></span>
                        <span className="first-phone">
                        0552 209 809
                        </span>
                        <span className="second-phone">
                        0552 209 809
                        </span>
                    </div>
                </div>               
            </div>
        </footer>
    )
}

export default Footer;