import React from "react";
import { Link } from "react-router-dom";
import Questions from "../components/Questions";

const QuestionsPool = () => {

  return (
    <section className="main">
      <div>
        <p>
            Questions Pool
        </p>
        <Questions />
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