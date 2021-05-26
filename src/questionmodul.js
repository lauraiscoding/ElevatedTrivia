import { useState } from "react";
import styles from "./modulstyle.scss";
export default function Modul(props) {
  const { question, choices, answer } = props.currentQuestion;
  console.log(choices);

  // create hook to change value
  const [answerValue, setAnswerValue] = useState(false);
  function handleClick(index, answer) {
    console.log(index);
    if (index === answer) {
      console.log("you clicked the right answer", answerValue);
      setAnswerValue(true);
      return answerValue;
    }
    return answerValue;
  }
  return (
    <div className="modal">
      <div className="questiontext"> {question}</div>
      {choices.map((choice, index) => (
        <div>
          <button
            className="buttonchoices"
            onClick={() => handleClick(index, answer)}
          >
            {choice}
          </button>
        </div>
      ))}
      {answerValue ? <p> you got it correct</p> : <p>you got it wrong</p>}
    </div>
  );
}
//
//<button
//onClick={() => setCurrentScore(currentScore + props.pointsEarned)}
//   >
