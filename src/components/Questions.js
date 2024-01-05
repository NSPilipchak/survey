import React, {useState} from "react";
import Question from "../components/Question";

const Questions = () => {

  const [questions] = useState(
    JSON.parse(localStorage.getItem("questions") || "")
    );

  return (
    <div className="column_question_list">
      {questions.map((question, index) => (
        <div key={`question_index${index}`}>
          <Question
            key={index}
            item={question} 
          />
        </div>
      ))}
    </div>
  );
};

export default Questions;