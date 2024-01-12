import React from "react";

const Answers = ({ answers = [], isShownResults, currentIndex, setCurrentIndex }) => {
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

  function setNewIndex(index) {
    setCurrentIndex(index);
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
      <ul className="answersList">
        {answers.map((item, index) => (
          <li 
            className={
              currentIndex == index 
                  ? "selectedQuestion" 
                  : ""
              } 
            key={item.Id}
            onClick={() => {
              setNewIndex(index);
            }}>
              <div
                className={
                  item.choise == item.CorrectAnswer 
                      ? "user-list-by-month__item" 
                      : "user-list-by-month__item wrongAnswer"
              }>
                {item.Id}:{item.choise}
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answers;