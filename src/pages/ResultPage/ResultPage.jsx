import React from "react";
import {NavLink} from "react-router-dom";

const ResultPage = () => {

  return (
    <div className="result-wrapper">
      <h2 className="result-title">Результаты теста</h2>
      <NavLink to="/test">
        <input type="button" className="result-button" value="Пройти заново"/>
      </NavLink>


    </div>
  )
}

export default ResultPage