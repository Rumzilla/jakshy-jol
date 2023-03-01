import React, {useEffect, useState} from 'react';
import './style.css'

const QuestionItem = (props) => {
  const {
    data,
    onGoNextQuestion,
    onCheckAnswer,
    totalQuestionsNumber,
    activeQuestionNumber,
    isShowDescription,
    errors,
    onFinishTest
  } = props

  const [currentAnswer, setCurrentAnswer] = useState(null)

  return (
    <div>
      <div className='testing-window-block'>
        <h1 className='testing-window-header container '>Пробный тест ПДД</h1>
      </div>
      <div className="question-block">
        <div className="container">
          <div>Ошибки: {errors}/2</div>
          <div className="question-block-header">Вопрос {data.id} из {totalQuestionsNumber}</div>
          <h2 className="question-block-title">
            <span className="question-block-number">{data.id}.</span>
            {data.text}
          </h2>
          <div className="question-block-image">
            <img className="image-block" src={data.image} alt="image-test"/>
          </div>

          {data.answers.map((answer, idx) => (
            <div key={idx} className={`question-inputs ${isShowDescription ? 'disabled' : ''}`}>
              <input
                onClick={() => setCurrentAnswer(answer.answer)}
                type="radio"
                className="question-input"
                id={idx}
                name="q1"
                disabled={isShowDescription}
              />
              <label htmlFor={idx}>{answer.text}</label>
            </div>
          ))}

          {isShowDescription && (
            <div id="answer-list">
              {data.description}
            </div>
          )}

          <div className="question-line"></div>
          <div className="question-btn-wrap">
            {
              (activeQuestionNumber === totalQuestionsNumber) && isShowDescription ? (
                <input
                  className="question-btn-next"
                  type="button"
                  value='Завершить тест'
                  onClick={onFinishTest}
                />
              ) : (
                <input
                  className="question-btn-next"
                  type="button"
                  value={isShowDescription ? 'Следующий вопрос' : 'Ответить'}
                  disabled={currentAnswer === null}
                  onClick={isShowDescription ? onGoNextQuestion : () => onCheckAnswer(currentAnswer)}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionItem;
