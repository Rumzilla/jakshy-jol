import React from "react"; 
import { useTranslation } from "react-i18next";

import "./sale-block.css";

const SaleBlock = () => {
    const {t} = useTranslation()
    return (
        <div className="sale-block-green">
            <div className="container">
                <div className="sale-block-white">
                    <div className="book-img"></div>
                    <div className="sale-block-info">
                        <h3 className="sale-info-header">
                        {t("info-header")}
                        </h3>
                        <p className="sale-info-text">{t("info-text")}</p>
                        <p className="sale-info-text">{t("info-text2")}</p>
                        <p className="sale-info-address">Вы можете приобрести данное пособие по адресу либо по звонку:</p>
                        <div className="button-wrap">
                            <span className="location-icon"></span>
                            <p className="sale-info-buy"> Сухе Батора 26/1</p>
                            <button className="buy-button">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleBlock