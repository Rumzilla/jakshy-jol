import React, {useState} from 'react';
import './style.css'

const QuestionItem = (props) => {
  const {
    data,
    onGoNextQuestion,
    onCheckAnswer,
    totalQuestionsNumber,
    activeQuestionNumber,
    isShowDescription,
    onFinishTest,
    showAnswer,
    answerColor
  } = props

  const [currentAnswer, setCurrentAnswer] = useState(null)
  return (
    <div>
      <div className='testing-window-block'>
      </div>
      <div className="question-block">
        <div className="container-for-test-window">
          <div className="question-image-block">
            <h2 className="question-block-title">
              <span className="question-block-number">{data.questionNamber}.</span>
              {data.text}
            </h2>
            <div className="question-block-image">
              <img className="image-block" src={data.image} alt="image-test"/>
            </div>
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
          <div className='check-answer' style={{ backgroundColor: answerColor }}>
            {isShowDescription ? showAnswer : ''}
          </div>
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
                  value={isShowDescription ? 'Следующий' : 'Отправить'}
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
