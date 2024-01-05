import React from "react";
import { Link } from "react-router-dom";

const QuestionsSetup = () => {

  return (
    <section className="main">
      <div>
        <p>
          Questions Setup
        </p>
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