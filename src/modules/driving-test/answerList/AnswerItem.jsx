import React, {useEffect, useState} from 'react';

const AnswerItem = () => {

  const [answer, setAnswer] = useState([])
  const [answerList, setAnswerList] = useState(1)


  const getAnswer = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/question/${answerList}/answer/`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getAnswer().then(data => {
      setAnswer(data);
    });
  }, []);

  const renderAnswers = answer.map((elem) => {
    return (elem.text)
  })

  return (
    <div>

      <div id="question-inputs">
        <input
          onClick={(e) => null}
          type="radio"
          className="question-input"
          id='1'
          name="q1"
          value='answer'
        />
        <label htmlFor="1">{renderAnswers[0]}</label>
      </div>


      <div id="question-inputs">
        <input
          onClick={(e) => null}
          type="radio"
          className="question-input"
          id='2'
          name="q1"
          value='answer'
        />
        <label htmlFor="2">{renderAnswers[1]}</label>
      </div>


      <div id="question-inputs">
        <input
          onClick={(e) => null}
          type="radio"
          className="question-input"
          id='3'
          name="q1"
          value='answer'
        />
        <label htmlFor="3">{renderAnswers[2]}</label>
      </div>

    </div>
  );
};

export default AnswerItem;