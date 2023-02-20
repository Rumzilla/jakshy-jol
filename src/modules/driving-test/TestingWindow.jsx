import React, {useState} from 'react';
import {questionStore} from "../../MOCK_DATA/QuestionStore";
import QuestionItem from "./questions/QuestionItem";
import ResultPage from "../../pages/ResultPage/ResultPage";

import './TestingWindow.css';

const DrivingTestModule = () => {

  const [answer, setAnswer] = useState(0)
  const [flag, setFlag] = useState(0)
  const [result, setResult] = useState(0)
  const [isShowResult, setIsShowResult] = useState(false)
  const [activeQuestionNumber, setActiveQuestionNumber] = useState(1)
  const [currentMistakesNumber, setCurrentMistakesNumber] = useState(0)

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
    if (event.target.value === true) {
      if (flag === 0) {
        setAnswer(answer + 1)
        setFlag(flag + 1)
      } else {
        setAnswer(answer)
      }
    } else {
      if (flag !== 0) {
        setCurrentMistakesNumber(currentMistakesNumber => currentMistakesNumber + 1)
        setAnswer(answer - 1)
        setFlag(flag - 1)
      } else {
        setAnswer(answer)
      }
    }
  }



  const renderQuestions = () => {
    return questionStore.questions.map((elem, idx) => {
      if (activeQuestionNumber !== elem.questionNumber) {
        return
      }
      return (
        <QuestionItem
          totalQuestionsNumber={questionStore.questions.length}
          key={`question_${idx}`}
          data={elem}
          getReset={getReset}
          getAnswer={getAnswer}
        />
      )
    })
  }


  return (
    <div className='testing-window-block'>
      <h1 className='testing-window-header container '>Пробный тест ПДД</h1>
      {isShowResult ? (
        <ResultPage
          getResult={getResult}
          result={result}
          totalQuestionsNumber={questionStore.questions.length}
        />
      ) : renderQuestions()}

    </div>
  );
};

export default DrivingTestModule;