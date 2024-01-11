import React from "react";

const Answers = ({ answers = [], isShownResults }) => {
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
    <div className={isShownResults ? 'user-list-by-month__list vLine' : 'hide'}>No selected answers</div>
  ) : (
    <div className={isShownResults ? 'user-list-by-month__list vLine' : 'hide'}>
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