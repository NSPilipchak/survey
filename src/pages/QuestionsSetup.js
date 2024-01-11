import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import SetupItem from "../components/SetupItem";
import {getOptions} from "../service/Const";

const QuestionsSetup = () => {

  const [options, setOptions] = useState(
    JSON.parse(localStorage.getItem("options") || "[]")
  );

  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(options));
  }, [options]);

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
        {getOptions().map((item, index) => (
          <div key={`option_index${index}`}>
            <SetupItem 
              item={item}
              setOptions={setOptions}
              options={options}/>
          </div>
        ))}
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