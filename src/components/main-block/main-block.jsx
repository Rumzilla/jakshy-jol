import React from "react";
import Header from "../header/header";

import "./main-block.css";

const MainBlock = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="main-block">
                    <div className="main-block-beige">
                    <h2 className="main-block-header">
                        Персональные уроки по вождению
                    </h2>
                    <h3 className="main-block-subheader">
                        Практические занятия дают 80% результата в обучении. Обучайтесь правильно и выгодно!
                    </h3>
                    <p className="main-block-consultation">
                        Получите полную консультацию по звонку!
                    </p>
                    <a href="#" className="main-block-whatsapp">
                        <span className="main-block-whatsapp-icon"></span>
                        WhatsApp
                    </a>
                    <div className="main-block-phone">
                        <span className="main-block-phone-icon"></span>
                            0552 209 809
                        </div>
                    </div>
                    <div className="main-block-green"></div>
                </div>
            </div>

        </div>
            

    )
}

export default MainBlock;