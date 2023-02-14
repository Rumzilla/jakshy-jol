import React from "react"; 

import "./sale-block.css";

const SaleBlock = () => {
    return (
        <div className="sale-block-green">
            <div className="container">
                <div className="sale-block-beige">
                    <div className="book-img"></div>
                    <div className="sale-block-info">
                        <h3 className="sale-info-header">
                        Методическое пособие:
                        </h3>
                        <p className="sale-info-text">Методическое пособие по правилам дорожного движения (пдд) с иллюстрациями и комментариями . методическое пособие составлено с дополнениями и пояснениями к дорожным знакам и разметкам.</p>
                        <p className="sale-info-text">При покупке оптом возможны скидки. за более подробной информацией обращаться напрямую к Руслану Жакшылыковичу по телефону или WhatsApp</p>
                        <p className="sale-info-address">
                        Вы можете приобрести данное пособие по адресу: <u>Сухе Ботора 26/1</u> либо по звонку <u>0552 209 809</u>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleBlock