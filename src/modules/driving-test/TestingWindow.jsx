import React, {useEffect, useState} from 'react';
import QuestionItem from "./questions/QuestionItem";
import {question} from "../../MOCK_DATA";
import './TestingWindow.css';

const DrivingTestModule = () => {

  const [activeQuestionNumber, setActiveQuestionNumber] = useState(1)
  const [flag, setFlag] = useState(0)
  const [answer, setAnswer] = useState(0)
  const [result, setResult] = useState(0)

  useEffect(() => {
    if (result > 2) {
      alert('Предельное количество ошибок *переход на страницу result*')
    }
  }, [result])

  const getReset = () => {
    setActiveQuestionNumber(prev => prev + 1)
    setAnswer(0)
    setFlag(0)
    setResult(result + answer)
  }

  const getResult = () => {
    setAnswer(0)
    setFlag(0)
    setResult(0)
  }

  const getAnswer = (event) => {
    if (event.target.value === 'false') {
      if (flag === 0) {
        setAnswer(answer + 1)
        setFlag(flag + 1)
      } else { setAnswer(answer) }
    } else {
      if (flag !== 0) {
        setFlag(flag - 1)
        setAnswer(answer - 1)
      } else {
        setAnswer(answer)
      }
    }
  }

  const renderQuestions = () => {
    return question.map((elem, idx) => {
      if (activeQuestionNumber !== elem.questionNumber) {
        return
      }
      return (
        <QuestionItem
          key={`question_${idx}`}
          totalQuestionsNumber={question.length}
          data={elem}
          getReset={getReset}
          getAnswer={getAnswer}
          activeQuestionNumber={activeQuestionNumber}
          result={result}
        />
      )
    })
  }
  return (
    <div>
      {renderQuestions()}
    </div>
  );
};

export default DrivingTestModule;