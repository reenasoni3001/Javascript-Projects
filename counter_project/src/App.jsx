import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const valuePlus = () => {
    setValue(value + 1);
  };
  const valueMinus = () => {
    setValue(value - 1);
  };
  const [value, setValue] = useState(0);

  return (
    <div>
      <div className="container">
        <button className="btn btn-plus" onClick={valuePlus}>
          +
        </button>
        <h1>{value}</h1>

        <button className="btn btn-minus" onClick={valueMinus}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
