import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNum: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question : {questionNum}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div >
      {answers
        ? answers.map((answer) => (
            <div key={answer}>
              <button id="button" disabled={userAnswer} onClick={callback}></button>
              <span id="span" dangerouslySetInnerHTML={{ __html: answer }} ></span>
            </div>
          ))
        : null}
    </div>
  </div>
);

export default QuestionCard;
