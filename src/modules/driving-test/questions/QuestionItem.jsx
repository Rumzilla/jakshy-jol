import React from "react";
import './style.css'
import AnswerItem from "../answerList/AnswerItem";

const QuestionItem = (props) => {
  const {
    data,
    getReset,
    totalQuestionsNumber,
  } = props


  return (
      <div className="question-block">
        <div className="container">
          <div className="question-block-header">Вопрос {data.id} из {totalQuestionsNumber}</div>
          <h2 className="question-block-title">
            <span className="question-block-number">{data.id}.</span>
            {data.text}
          </h2>
          <div className="question-block-image">
            <img src={data.image} alt="image-test"/>
          </div>

          <AnswerItem />



          <div id="answer-list">
            Разъяснение ответа
          </div>
          <div className="question-line"></div>
          <div className="question-btn-wrap">
            <input className="question-btn-next" type="button" value='Отправить ответ' onClick={getReset}/>
          </div>
        </div>
      </div>
  )
}

export default QuestionItem;