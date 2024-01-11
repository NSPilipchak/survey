import React from "react";
import Question from "../components/Question";
import { setAnswerKey } from "../helpers/Helpers";

const Questions = ({answerPool, setAnswerPool, questions = [], options}) => {

  const handleSelectAnswer = (id, key, countOfAnswer) => {
    if (answerPool.find(item => item.Id === id)) {
      setAnswerPool(current =>
        current.map(obj => {
          if (obj.Id === id) {
            return {...obj, choise: setAnswerKey(obj.choise, key, countOfAnswer)};
          }
          return obj;
        }),
      );
    } else {
      let obj = questions.find(item => {
        return item.Id === id
      });
      obj.choise = key;
      setAnswerPool(current => [...current, obj]);
    }
  };

  return (
    <div className="column_question_list">
      {questions.map((question, index) => (
        <div key={`question_index${index}`}>
          <Question
            key={index}
            item={question}
            answerPool = {answerPool}
            setAnswerPool={handleSelectAnswer}
            options={options}
          />
        </div>
      ))}
    </div>
  );
};

export default Questions;