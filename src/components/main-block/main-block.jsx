import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";

import "./main-block.css";

const MainBlock = () => {
    return (
        <div className="main-block-background">
            <Header />
            <div className="container">
                <div className="main-block">
                    <div className="main-block-car-bg">
                        <div className="main-block-car-img"></div>
                    </div>
                    <h2 className="main-block-header">
                        Персональные уроки по вождению
                    </h2>
                    <h3 className="main-block-subheader">
                        Практические занятия дают 80% результата в обучении. Обучайтесь правильно и выгодно!
                    </h3>
                    <p className="main-block-consultation">
                        Получите полную консультацию по звонку!
                    </p>
                    <div className="main-block-contact">
                        <Link to='/' className="main-block-whatsapp">
                            <span className="main-block-whatsapp-icon"></span>
                            WhatsApp
                        </Link>
                        <div className="main-block-phone">
                            <span className="main-block-phone-icon"></span>
                                0552 209 809
                        </div>
                    </div>
                    <div className="main-block-footer">
                        <div className="main-block-work-time">
                            <div className="main-block-work-time-graph">
                                <span className="main-block-work-time-graph-icon"></span>
                                График работы 
                            </div>
                            <div className="main-block-work-time-text">
                            ПН-ВС; 09:00-18:00
                            </div>
                        </div>
                        <Link to='/' className="main-block-gmail">
                            <span className="main-block-gmail-icon"></span>
                            ruslanjakshylykov@gmail.com
                        </Link>

                    </div>
                    
                </div>  
            </div>
            
        </div>
    )
}

export default MainBlock;