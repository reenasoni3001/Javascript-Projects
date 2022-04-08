import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const increment = () => {
    setCount(count + parseInt(extra));
  };
  const decrement = () => {
    setCount(count - extra);
  };

  const [count, setCount] = useState(0);
  const [extra, setExtra] = useState(0);

  return (
    <div>
      <div className="container">
        <input
          type="number"
          value={extra}
          onChange={(e) => {
            setExtra(e.target.value);
          }}
          className="input"
        />
        <div className="displayValues">
          <button className="btn btn-plus" onClick={increment}>
            +
          </button>
          <h1>{count}</h1>

          <button className="btn btn-minus" onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
