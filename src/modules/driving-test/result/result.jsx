import React from "react";
import {NavLink} from "react-router-dom";

const Result = (props) => {
  return (
    <div className="result-wrapper">
      <h2 className="result-title">{props.result}</h2>
      <NavLink to="/test">
        <input onClick={props.getResult} type="button" className="result-button" value="Пройти заново"/>
      </NavLink>
    </div>
  )
}

export default Result