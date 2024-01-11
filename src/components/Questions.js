import React from "react";
import Question from "../components/Question";

const Questions = ({answerPool, setAnswerPool, questions = [], options}) => {

  const setKey = (keyOld, keyNew, countOfAnswer) => {
    if (countOfAnswer > 1) {
      let arr = keyOld.split("");
      arr.find(key => key === keyNew)
        ? arr = arr.filter(key => key !== keyNew)
        : arr.push(keyNew);
      return arr.sort().join("");
    }
    return keyNew;
  }
  
  const handleSelectAnswer = (id, key, countOfAnswer) => {

    if (answerPool.find(item => item.Id === id)) {
      setAnswerPool(current =>
        current.map(obj => {
          if (obj.Id === id) {
            return {...obj, choise: setKey(obj.choise, key, countOfAnswer)};
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