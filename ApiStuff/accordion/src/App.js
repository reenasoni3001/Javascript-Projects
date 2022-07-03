import "./App.css";
//import { data } from "./components/data";
import React from "react";

function ReusableAccordion({ question, answer }) {
  const [active, setActive] = React.useState(false);
  return (
    <div className="question">
      <div className="item-question" onClick={() => setActive(!active)}>
        <div>{question}</div>
        <div>{active ? "-" : "+"}</div>
      </div>
      {active && <p>{answer}</p>}
    </div>
  );
}

function App() {
  const data = {
    id: 123,
    question: "Question 1",
    answers:
      "Ex elit ea qui proident aliqua pariatur qui proident aute sunt. Velit voluptate cillum id esse veniam. Dolore culpa pariatur irure sint. Aute et id quis incididunt fugiat. Enim commodo cillum officia culpa est anim consectetur magna magna.",
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {Array(2000)
          .fill(data)
          .map((item, i) => (
            <ReusableAccordion
              question={item.question}
              answer={item.answers}
              key={i}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
