import styles from "./modulstyle.scss";
export default function Modul(props) {
  const { question, choices } = props.currentQuestion;
  console.log(choices);
  return (
    <div className="modal">
      <div className="questiontext"> {question}</div>
      {choices.map(choice=> <div> <button className="buttonchoices">{choice}</button> </div>)}
    </div>
  );
}
