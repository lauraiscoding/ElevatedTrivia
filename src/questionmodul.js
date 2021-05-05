import styles from "./modulstyle.scss";
export default function Modul(questionData) {
  const { question, choices } = questionData;
  console.log(choices);
  return (
    <div className="modal">
      <div> {question}</div>
    </div>
  );
}
