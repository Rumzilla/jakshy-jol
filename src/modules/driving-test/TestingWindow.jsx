import React, {useEffect, useState} from 'react';
import QuestionItem from "./questions/QuestionItem";
import './TestingWindow.css';

const DrivingTestModule = () => {
  const [activeQuestionNumber, setActiveQuestionNumber] = useState(1)
  const [questions, setQuestions] = useState([])

  const getQuestions = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/question/');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getQuestions().then(data => {
      setQuestions(data);
    });
  }, []);

  const getReset = () => {
    setActiveQuestionNumber(prev => prev + 1)
  }

  const renderQuestions = () => {
    return questions.map((elem, idx) => {
      if (activeQuestionNumber !== elem.id) {
        return
      }
      return (
        <QuestionItem
          key={`question_${idx}`}
          totalQuestionsNumber={questions.length}
          data={elem}
          getReset={getReset}
        />
      )
    })
  }
  return (
    <div className='testing-window-block'>
      <h1 className='testing-window-header container '>Пробный тест ПДД</h1>
      {renderQuestions()}
    </div>
  );
};

export default DrivingTestModule;