import React from "react";
import Question from "../components/Question";

const Questions = ({answerPool, setAnswerPool, questions = []}) => {
  
  const handleSelectAnswer = (id, key) => {
    console.log('handleSelectAnswer: Id:'+ id + ' key: ' + key);

    if (answerPool.find(item => item.Id === id)) {
      setAnswerPool(current =>
        current.map(obj => {
          if (obj.Id === id) {
            return {...obj, choise: key};
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
          />
        </div>
      ))}
    </div>
  );
};

export default Questions;