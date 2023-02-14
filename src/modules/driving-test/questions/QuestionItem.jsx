import React from "react";
import './style.css'

const QuestionItem = (props) => {
  const {
    data,
    getAnswer,
    getReset,
    totalQuestionsNumber,
  } = props


  return (
    <div className="test-wrapper">
      <div>Вопрос {data.questionNumber} из {totalQuestionsNumber}</div>
      <h2 className="question-title">
        <span>{data.questionNumber}</span>
        {data.question}
      </h2>
      <div className="question-image">
        <img src={data.image} alt="image-test"/>
      </div>
      <div id="question-inputs">
        <input
          onClick={(e) => getAnswer(e)}
          type="radio"
          className="question-input"
          id="q1"
          name="q1"
          value={data.answers[0].isAnswerCorrect}
        />
        <label htmlFor="q1">{data.answers[0].text}</label>
      </div>
      <div id="question-inputs">
        <input
          onClick={(e) => getAnswer(e)}
          type="radio"
          className="question-input"
          id="q2"
          name="q1"
          value={data.answers[1].isAnswerCorrect}
        />
        <label htmlFor="q2">{data.answers[1].text}</label>
      </div>
      <div id="question-inputs">
        <input
          onClick={(e) => getAnswer(e)}
          type="radio"
          className="question-input"
          id="q3"
          name="q1"
          value={data.answers[2].isAnswerCorrect}
        />
        <label htmlFor="q3">{data.answers[2].text}</label>
      </div>
      <div id="answer-list">
        {data.description}
      </div>


      <div className="button-list">
        <div>
          <input type="button" value={data.status} onClick={getReset}/>
        </div>
      </div>
    </div>
  )
}

export default QuestionItem;