import React from "react";

import './info-block.css';

const InfoBlock = () => {
    return (
        <div className="container">
            <div className="card-block">
                <div className="card-item">
                    <div className="card-bg">
                        <span className="client-logo"></span>
                    </div>
                    <p className="card-text">1000+ довольных клиентов</p>
                </div>
                <div className="card-item">
                    <div className="card-bg">
                        <span className="work-logo"></span>
                    </div>
                    <p className="card-text">Более 25 лет стаж работы</p>
                </div>
                <div className="card-item">
                    <div className="card-bg">
                        <span className="driver-logo"></span>
                    </div>
                    <p className="card-text">1.5 Часа - время одного занятия</p>
                </div>
                <div className="card-item">
                    <div className="card-bg">
                        <span className="time-logo"></span>
                    </div>
                    <p className="card-text">Занятия в удобное для вас время</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="about-block">
                <div className="photo"></div>
                <div className="about-info-block">
                    <h2 className="about-info-name">
                    Руслан Жакшылыкович
                    </h2>
                    <p className="about-info-experience">
                    Инструктор по вождению более 25 лет.
                    </p>
                    <p className="about-info-text">
                    Омурбеков Руслан Жакшылыкович. Водительский стаж более 25 лет. Опыт преподавания и инструкторский стаж более 12 лет. Индивидуально подготовил практическому вождению 1500+ за 6 лет преподавания в автошколе выпустил более 1600+ студентов. Во время преподавания ПДД в автошколе, обнаружил ошибки и не полную информацию в ПДД Кыргызстана от 5.02.2022 года. Отталкиваясь от этих ошибок, составил свою методическое пособие по ПДД.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock;