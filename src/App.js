import styles from "./styles.scss";
import data from "./data.json";
import Modul from "./questionmodul";
import { useState } from "react";
export default function App() {
  console.log(data);

  const [cardState, setCardState] = useState(false);
  const { title, score, sections } = data;
  return (
    <div className="App">
      {cardState ? <Modul /> : null}
      <div className="heading">
        <button className="reset">Reset</button>
        <h1 className="title">{title}</h1>
        <div>
          <h2>{score}</h2>
        </div>
      </div>
      <div className="board">
        {sections.map(({ name, questions }) => {
          return (
            <div className="container">
              <div className="square">{name}</div>
              {questions.map(({ question, points }) => {
                return (
                  <div>
                    <button
                      className="questions"
                      onClick={() => setCardState(!cardState)}
                    >
                      <div>{points}</div>
                      {/* {cardState ? <Modul /> : null} */}
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* t=modal was here */}
    </div>
  );
}
