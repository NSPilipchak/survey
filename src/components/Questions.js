import React, {useState} from "react";
import Question from "../components/Question";
import { setAnswerKey } from "../helpers/Helpers";

const Questions = ({answerPool, setAnswerPool, questions = [], options}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuestions] = useState([questions.length]);
  const show = () => {
    questions.map((q, index) => (
      showQuestions[index] = index === currentIndex
    ));
  }
  show();

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

  const getStyle = (index) => {
    return showQuestions[index] ? '' : 'hideQuestion';
  }

  function pressPrevious() {
    if (currentIndex > 0 ) {
      showQuestions[currentIndex] = false;
      setCurrentIndex(currentIndex - 1);
      showQuestions[currentIndex] = true;
    }
  }

  function pressNext() {
    if (currentIndex < showQuestions.length - 1) {
      showQuestions[currentIndex] = false;
      setCurrentIndex(currentIndex + 1);
      showQuestions[currentIndex] = true;
    }
  }

  return (
    <div className="column_question_list">
      {questions.map((question, index) => (
        <div key={`question_index${index}`} className={getStyle(index)}>
          <Question
            key={index}
            item={question}
            answerPool = {answerPool}
            setAnswerPool={handleSelectAnswer}
            options={options}
          />
          <button onClick={pressPrevious}>Previous</button>
          <button onClick={pressNext}>Next</button>
        </div>
      ))}
    </div>
  );
};

export default Questions;