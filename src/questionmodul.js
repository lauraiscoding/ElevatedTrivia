import { useState } from "react";
import styles from "./modulstyle.scss";

export default function Modul(props) {
  const score = props.score;
  const { question, choices, answer, points } = props.currentQuestion;
  // console.log(choices);

  const [answerValue, setAnswerValue] = useState(false);
  // create hook to change value

  const [answerMessage, setAnswerMessage] = useState("");
  // create hook to change value

  // creating score hook to update stat
  const [scoreValue, setScoreValue] = useState(score);

  //decide whether is correct answer then update score value
  // if (answerValue === true) return setScoreValue(scoreValue + points);
  // console.log("scoreeeee--", scoreValue);

  function handleClick(index, answer) {
    const wrongChoice = "sorry you got it wrong!";
    const rightChoice = "you got it right!!";
    if (index === answer) {
      setAnswerValue(true);
      setAnswerMessage(rightChoice);
    } else {
      setAnswerValue(false);
      setAnswerMessage(wrongChoice);
    }
    return answerValue;
  }

  return (
    <div className="modal">
      <div className="questiontext"> {question}</div>
      {choices.map((choice, index) => (
        <div>
          <button
            id="buttonChoices"
            className="buttonchoices"
            onClick={() => handleClick(index, answer)}
          >
            {choice}
          </button>
        </div>
      ))}
      {answerMessage}
    </div>
  );
}
