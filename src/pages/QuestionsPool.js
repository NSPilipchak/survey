import React, {useState} from "react";
import { Link } from "react-router-dom";
import Questions from "../components/Questions";
import Answers from "../components/Answers";

const QuestionsPool = () => {

  const [questions] = useState(
    JSON.parse(localStorage.getItem("questions") || "")
  );
  const [answerPool, setAnswerPool] = useState(
    JSON.parse(localStorage.getItem("answerPool") || [])
  );

  return (
    <section className="main">
      <div>
        <p>
            Questions Pool
        </p>
        <Questions 
          answerPool={answerPool}
          setAnswerPool={setAnswerPool}
          questions={questions}
        />
      </div>
      <div>
        <Answers
          answers={answerPool} 
        />
        <h3>
          <Link to="/">Main page</Link>
        </h3>
      </div>
    </section>
  );
};

export default QuestionsPool;