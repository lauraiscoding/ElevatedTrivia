import styles from "./styles.scss";
import data from "./data.json";
export default function App() {
  console.log(data);

  const { title, score, sections } = data;
  return (
    <div className="App">
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
              {questions.map(({ points }) => {
                return (
                  <div>
                    <button className="questions">
                      <div>{points}</div>
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
