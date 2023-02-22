import React from "react";
import './style.css'


const QuestionItem = (props) => {
  const {
    data,
    getReset,
    totalQuestionsNumber,
    getAnswer,
    result,
  } = props

  return (
      <div className="question-block">
        <div className="container">
          <div>Ошибки: {result}/2</div>
          <div className="question-block-header">Вопрос {data.questionNumber} из {totalQuestionsNumber}</div>
          <h2 className="question-block-title">
            <span className="question-block-number">{data.questionNumber}.</span>
            {data.text}
          </h2>
          <div className="question-block-image">
            <img className="image-block" src={data.image} alt="image-test"/>
          </div>
          <div id="question-inputs">
            <input
              onClick={(e) => getAnswer(e)}
              type="radio"
              className="question-input"
              id='1'
              name="q1"
              value={data.answers[0].answer}
            />
            <label htmlFor="1">{data.answers[0].text}</label>
          </div>


          <div id="question-inputs">
            <input
              onClick={(e) => getAnswer(e)}
              type="radio"
              className="question-input"
              id='2'
              name="q1"
              value={data.answers[1].answer}
            />
            <label htmlFor="2">{data.answers[1].text}</label>
          </div>


          <div id="question-inputs">
            <input
              onClick={(e) => getAnswer(e)}
              type="radio"
              className="question-input"
              id='3'
              name="q1"
              value={data.answers[2].answer}
            />
            <label htmlFor="3">{data.answers[2].text}</label>
          </div>


          <div id="answer-list">
            {data.description}
          </div>
          <div className="question-line"></div>
          <div className="question-btn-wrap">
            <input className="question-btn-next" type="button" value='След' onClick={getReset}/>
          </div>
        </div>
      </div>
  )
}

export default QuestionItem;