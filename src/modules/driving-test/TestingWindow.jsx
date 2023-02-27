import React, {useEffect, useState} from 'react';
import QuestionItem from "./questions/QuestionItem";
import './TestingWindow.css';
import Questions from "../../MOCK_DATA/question";


const DrivingTestModule = () => {

  const [activeQuestionNumber, setActiveQuestionNumber] = useState(1)
  const [flag, setFlag] = useState(0)
  const [answer, setAnswer] = useState(0)
  const [result, setResult] = useState(0)
  const [question, setQuestion] = useState(Questions)

  useEffect(() => {
    if (question === []) {
      return(console.log('loading'))
    } else {setQuestion(question)}
  }, [])

  // Эта функция для кнопки "Отправить".
  const getReset = () => {
    setActiveQuestionNumber(prev => prev + 1)
    setAnswer(0)
    setFlag(0)
    setResult(result + answer)
  }

  // Эта функция для кнопки "Пройти тест заново". Пока нигде не используется.
  const getResult = () => {
    setAnswer(0)
    setFlag(0)
    setResult(0)
  }

  //Эта функция для счетчка ошибок
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

  //Эта функция для того, чтобы 1 вопрос отрисовывался на отдельной странице
  const renderQuestions = () => {
    return question.map((elem, idx) => {
      if (activeQuestionNumber !== elem.id) {
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



// // Данный хук следит за количеством ошибок и если их больше 2
// useEffect(() => {
//   if (result > 2) {
//     setSwitchToResult(true)
//   }
// }, [result])
//
// //Данный хук переводит на страницу результата после последнего вопроса
// useEffect(() => {
//   if (activeQuestionNumber === question.length + 1) {
//     setSwitchToResult(true)
//   }
// }, [])
