import React from "react";
import { Link } from "react-router-dom";

import "./test-block.css"

const TestBlock = () => {
    return (
        <div className="test-block">
            <div className="container">
                <div className="trafficlight-wrap">
                <span className="trafficlight"></span>
                </div>
                <h2 className="test-block-header">
                    Жакшы Жол 
                </h2>
                <h2 className="test-block-subheader">
                Научитесь водить правильно и безопасно вместе с опытным инструктором по вождению 
                </h2>
                <div className="test-card-practice">
                    <div className="test-card-practice-img"></div>
                    <div className="test-card-practice-block">
                        <h3 className="test-card-practice-header">
                        Практическое вождение авто с инструктором:
                        </h3>
                        <p className="test-card-practice-text">Автошкола «Жакшы - Жол», этот проект для всех жителей Бишкека. Автошкола Бишкека обучают вождению по категориям “B”. Если у вас есть права, но нет практики, наш инструктор поможет вам с практикой. Первые уроки будут с инструктором на его машине Honda Jazz(коробка автомат). </p>
                        <p className="test-card-practice-text">Стоимость практики можно узнать у него по телефону, по WhatsApp.</p>
                    </div>
                </div>
                <div className="test-card-task">
                    <div className="test-card-task-img"></div>
                    <div className="test-card-task-block">
                        <h3 className="test-card-task-header">
                            Пройти пробный тест
                        </h3>
                        <p className="test-card-task-text">
                        Проверьте свои знания ПДД вместе с нами. Вам дается 25 минут чтобы ответить на 20 вопросов с иллюстрациями и вариантами ответов, узнайте уровень ваших знаний ПДД 
                        </p>
                        <Link to='/test' className="pass-the-test">
                        Пройти Тест!
                        </Link>
                    </div>
                </div>
                <div className="road">
                    <span className="road-img"></span>
                </div>
            </div>
        </div>
    )
}

export default TestBlock;