import React from "react";
import { Link } from "react-router-dom";

const QuestionsSetup = () => {

  const clearAnswers = () => {
    localStorage.setItem("answerPool", JSON.stringify([]));
  }

  return (
    <section className="main">
      <div>
        <p>
          Questions Setup
        </p>
      </div>
      <div>
        <button onClick={clearAnswers}>clear answers</button> 
      </div>
      <div>
        <h3>
          <Link to="/">Main page</Link>
        </h3>
      </div>
    </section>
  );
};

export default QuestionsSetup;