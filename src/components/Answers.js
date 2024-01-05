import React from "react";

const Answers = ({ answers = [] }) => {
  localStorage.setItem("answerPool", JSON.stringify(answers));

    return answers.length === 0 ? (
        <div>No selected answers</div>
    ) : (
        <div className="user-list-by-month__list vLine">
            <ul>
                {answers.map(item => (
                    <li className="user-list-by-month__item" key={item.Id}>
                        {item.Id}:{item.choise}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Answers;