import React, {useEffect, useState} from 'react';
import QuestionItem from "./questions/QuestionItem";
import './TestingWindow.css';
import CircularIndeterminate from "../../components/loader";

const DrivingTestModule = (props) => {

  const [activeQuestionNumber, setActiveQuestionNumber] = useState(1)
  const [question, setQuestion] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isShowDescription, setIsShowDescription] = useState(false)
  const [errors, setErrors] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const getQuestions = async () => {
    const response = await fetch('http://43.207.186.205/api/question/');
    return await response.json();
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const data  = await getQuestions()
        setQuestion(data)
      } catch (e) {
        console.log(e, 'error')
      } finally {
        setIsLoading(false)
      }
    })()
  }, []);


  // Эта функция для кнопки "Отправить".
  const handleGoNextQuestion = () => {
    props.onChangeTest({
      errors,
      correctAnswers,
      totalQuestionsNumbers: question.length
    })
    if (errors > 2) {
      props.onFinishTest({
        errors,
        correctAnswers,
        totalQuestionsNumbers: question.length
      })
      return
    }
    setActiveQuestionNumber(prev => prev + 1)
    setIsShowDescription(false)
  }

  const handleCheckAnswer = (answer) => {
    if (!answer) {
      setErrors(prev => prev + 1)
    } else {
      setCorrectAnswers(prev => prev + 1)
    }
    setIsShowDescription(true)
  }

  const handleFinishTest = () => {
    props.onFinishTest({
      errors,
      correctAnswers,
      totalQuestionsNumbers: question.length
    })
  }

  if (isLoading) {
    return <CircularIndeterminate />
  }

  return (
    <div>
      {question.map((elem, idx) => {
        if (activeQuestionNumber !== elem.id) {
          return
        }
        return (
          <QuestionItem
            key={`question_${idx}`}
            totalQuestionsNumber={question.length}
            data={elem}
            onGoNextQuestion={handleGoNextQuestion}
            activeQuestionNumber={activeQuestionNumber}
            isShowDescription={isShowDescription}
            onCheckAnswer={handleCheckAnswer}
            errors={errors}
            onFinishTest={handleFinishTest}
          />
        )
      })}
    </div>
  );
};

export default DrivingTestModule;