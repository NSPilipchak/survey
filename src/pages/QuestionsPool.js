import React, {useState} from "react";
import { Link } from "react-router-dom";
import Questions from "../components/Questions";

const QuestionsPool = () => {
  const [answerPool, setAnswerPool] = useState(
    JSON.parse(localStorage.getItem("answerPool") || "[]")
  );
  const [questions] = useState(
    JSON.parse(localStorage.getItem("questions") || "")
  );
  const [rawData, setRawData] = useState([]);

  return (
    <section className="main">
      <div>
        <p>
            Questions Pool
        </p>
        <Questions 
          questions={questions}
          answerPool={answerPool}
          setAnswerPool={setAnswerPool}
          rawData={rawData}
        />
      </div>
      <div>
        <h3>
          <Link to="/">Main page</Link>
        </h3>
      </div>
    </section>
  );
};

export default QuestionsPool;