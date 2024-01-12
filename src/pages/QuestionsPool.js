import "./Questions.css";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Questions from "../components/Questions";
import Answers from "../components/Answers";

const QuestionsPool = () => {
  const [currentIndex, setCurrentIndex] = useState(
    JSON.parse(localStorage.getItem('currentIndex') || 0)
  );

  useEffect(() => {
    localStorage.setItem('currentIndex', JSON.stringify(currentIndex));
  }, [currentIndex]);

  const [isShownResults, setShownResults] = useState(false);
  const [options] = useState(
    JSON.parse(localStorage.getItem("options") || "[]")
  );

  const [questions] = useState(
    JSON.parse(localStorage.getItem("questions") || "")
  );
  const [answerPool, setAnswerPool] = useState(
    JSON.parse(localStorage.getItem("answerPool") || [])
  );

  return (
    <section className="main">
      <div>
        <h3>
          <Link to="/">Main page</Link>
        </h3>
      </div>
      <div>
        <p>
            Questions Pool
        </p>
        <Questions 
          answerPool={answerPool}
          setAnswerPool={setAnswerPool}
          questions={questions}
          options={options}
          isShownResults={isShownResults}
          setShownResults={setShownResults}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div>
        <Answers
          answers={answerPool}
          isShownResults={isShownResults}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </section>
  );
};

export default QuestionsPool;