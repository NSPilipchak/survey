import React, {useState} from "react";

const Question = ({ item }) => {

    const [countOfAnswer] = useState(
        item.CorrectAnswer.length || 0
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

    return (
        <div className={`question_${item.Id}`}>
            <p className={`questionText`}>{item.Id}: {question}</p>
            <p className={`answer`}>({countOfAnswer})-{item.CorrectAnswer}</p>

            <div>
                {[...respondMap].map(([key, value]) => (
                    <option key={key} value={key}>
                        {value}
                    </option>
                ))}
            </div>
        </div>
    );
};

export default Question;