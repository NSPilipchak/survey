import React, {useState} from "react";
import Question from "../components/Question";

const Questions = ({questions, answerPool, setAnswerPool, rawData}) => {

  const handleSelectAnswer = (Id, key) => {
    console.log('handleSelectAnswer: Id:'+ Id + ' key: ' + key);
    // answerPool.find(item => item.Id === Id)
    //   ? setAnswerPool(answerPool.filter(item => item.Id !== Id))
    //   : setAnswerPool([...answerPool, rawData.find(item => item.Id === Id)]);
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