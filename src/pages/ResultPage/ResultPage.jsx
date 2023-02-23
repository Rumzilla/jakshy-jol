import React from "react";
import {NavLink} from "react-router-dom";

const ResultPage = (props) => {
  const {
    timerOver
  } = props
  console.log(timerOver)
  return (
    <div className="result-wrapper">
      <h2 className="result-title">Результаты теста ебать Время:{timerOver}</h2>
      <NavLink to="/test">
        <input onClick={props.getResult} type="button" className="result-button" value="Пройти заново"/>
      </NavLink>
    </div>
  )
}

export default ResultPage