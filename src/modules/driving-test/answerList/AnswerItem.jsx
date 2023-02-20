import React, {useEffect, useState} from 'react';
import questionItem from "../questions/QuestionItem";

const AnswerItem = () => {

  const [answer, setAnswer] = useState([])

  const getAnswer = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/question/${questionItem.data.id}/answer/`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getAnswer().then(data => {
      setAnswer(data);
    });
  }, []);
  console.log(getAnswer())
  return (
    <div>


      <div id="question-inputs">
        <input
          onClick={(e) => null}
          type="radio"
          className="question-input"
          id="q1"
          name="q1"
          value={'Вариант ответа 1'}
        />
        <label htmlFor="q1">{}</label>
      </div>


      <div id="question-inputs">
        <input
          onClick={(e) => null}
          type="radio"
          className="question-input"
          id="q2"
          name="q1"
          value={'Вариант ответа 2'}
        />
        <label htmlFor="q2">Вариант ответа 2</label>
      </div>


      <div id="question-inputs">
        <input
          onClick={(e) => null}
          type="radio"
          className="question-input"
          id="q3"
          name="q1"
          value={'Вариант ответа 3'}
        />
        <label htmlFor="q3">Вариант ответа 3</label>
      </div>
    </div>
  );
};

export default AnswerItem;