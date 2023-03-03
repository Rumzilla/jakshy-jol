import React from "react";

const ResultPage = (props) => {

  const {
    countError,
    onResetTest,
    correctAnswers,
    totalQuestionsNumber,
    finishTime
  } = props

  return (
    <div className="result-wrapper">
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
    </div>
  )
}

export default ResultPage