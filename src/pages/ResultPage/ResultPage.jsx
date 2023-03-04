import React, {useEffect, useState} from "react";

const ResultPage = (props) => {

  const {
    countError,
    onResetTest,
    correctAnswers,
    totalQuestionsNumber,
    finishTime,
  } = props

  const [finishTest, setFinishTest] = useState(false)

  useEffect(() => {
    if (countError < 3 && finishTime !== '19:60') {
      setFinishTest(true)
    } else {
      setFinishTest(finishTest)
    }
  }, [finishTest])

  const testPassed = () => {
    return (
      <div className="result-wrapper-accept">
        <h1>ТЕСТ ПРОЙДЕН</h1>
        <h2 className="result-title">Результаты теста</h2>
        <p> Количество ошибок: {countError}/2</p>
        <p> Количество верных ответов: {correctAnswers}/{totalQuestionsNumber} </p>
        <p> Потраченное время: {finishTime} </p>
        <input
          type="button"
          className="result-button"
          value="Пройти заново"
          onClick={onResetTest}
        />
        <button><a href="/">На главную</a></button>
      </div>
    )
  }

  const testFailed = () => {
    return (
      <div className="result-wrapper-falied">
        <h1>ТЕСТ ПРОВАЛЕН</h1>
        <h2 className="result-title">Результаты теста</h2>
        <p> Количество ошибок: {countError}/2</p>
        <p> Количество верных ответов: {correctAnswers}/{totalQuestionsNumber} </p>
        <p> Потраченное время: {finishTime} </p>
        <input
          type="button"
          className="result-button"
          value="Пройти заново"
          onClick={onResetTest}
        />
        <button><a href="/">На главную</a></button>
      </div>
    )
  }

  return (
      <div>
        {finishTest ? testPassed() : testFailed()}
      </div>
  )
}

export default ResultPage