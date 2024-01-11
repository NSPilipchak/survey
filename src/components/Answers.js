import React from "react";

const Answers = ({ answers = [] }) => {
  localStorage.setItem("answerPool", JSON.stringify(answers));

  const getCorrectAnswers = () => {
    let correctAnswers = 0;
    answers.forEach(item => {
      correctAnswers += item.CorrectAnswer === item.choise ? 1 : 0;
    });
    return correctAnswers;
  }
    
  const getResults = () => {
    return (getCorrectAnswers() / answers.length * 100).toFixed(2);
  }

  return answers.length === 0 ? (
    <div>No selected answers</div>
  ) : (
    <div className="user-list-by-month__list vLine">
      <div>
        goted: {answers.length}<br/>
        correct: {getCorrectAnswers()}<br/>
        result: {getResults()}%
      </div>
      <ul>
        {answers.map(item => (
          <li className="user-list-by-month__item" key={item.Id}>
            {item.Id}:{item.choise}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answers;