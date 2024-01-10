import React, {useState} from "react";
import PropTypes from "prop-types";
import { getAnswerOptions } from "../service/Const"

const Question = ({ item, setAnswerPool, answerPool }) => {
    const [checkedAnsw] = React.useState([]);
    const [countOfAnswer] = useState(
        item.CorrectAnswer.length || 0
    );
    const [inputType] = useState(
        item.CorrectAnswer.length === 1 ? 'radio' : 'checkbox'
    );

    let splitedQuestion = item.Question.split("\r\n");
    let question = '';
    let respondMap = new Map();

    splitedQuestion.map((quest) => {
        if (quest.indexOf('A. ') === 0) {
            respondMap.set('A', quest);
        } else if (quest.indexOf('B. ') === 0) {
            respondMap.set('B', quest);
        } else if (quest.indexOf('C. ') === 0) {
            respondMap.set('C', quest);
        } else if (quest.indexOf('D. ') === 0) {
            respondMap.set('D', quest);
        } else if (quest.indexOf('E. ') === 0) {
            respondMap.set('E', quest);
        } else if (quest.indexOf('F. ') === 0) {
            respondMap.set('F', quest);
        } else {
            if (question.length === 0) {
                question += quest;
            } else {
                question += "\r\n" + quest;
            }
        }
    })

    const check = () => {
        answerPool.forEach((answer) => {
            if (answer.Id === item.Id) {
                getAnswerOptions().forEach(a => checkedAnsw[a.key] = answer.choise.includes(a.key));
            }
        });
      }

    check();

    return (
        <div className={`question_${item.Id}`}>
            <p className={`questionText`}>{item.Id}: {question}</p>
            <p className={`answer`}>({countOfAnswer})-{item.CorrectAnswer}</p>

            <div>
                <form>
                    {[...respondMap].map(([key, value]) => (
                        <div key={key} value={key}>
                            <input
                                type={inputType}
                                name={`answer_${item.id}`}
                                onChange={() => {
                                    setAnswerPool(item.Id, key, countOfAnswer);
                                    checkedAnsw[key] = !checkedAnsw[key];
                                }}
                                checked={checkedAnsw[key]}
                            />
                            {value}
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

Question.propTypes = {
    setAnswerPool: PropTypes.func
  };

export default Question;