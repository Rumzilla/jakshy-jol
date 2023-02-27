import React, {useEffect, useState} from 'react';

const Questions = () => {

  const [question, setQuestion] = useState([])

  const getQuestions = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/question/');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getQuestions().then(data => {
      setQuestion(data);
    });
  }, []);

  return (
    question
  );
};



export default Questions;


