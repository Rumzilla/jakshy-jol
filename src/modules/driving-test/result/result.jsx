import React from "react";
import {NavLink} from "react-router-dom";

const Result = (props) => {
  return (
    <div className="result-wrapper">
      <h2 className="result-title">Количество баллов:</h2>
      <div className="result-count">{props.result} из {props.totalQuestionsNumber}</div>
      <NavLink to="/">
        <input onClick={props.getResult} type="button" className="result-button" value="Пройти заново"/>
      </NavLink>
    </div>
  )
}

export default Result