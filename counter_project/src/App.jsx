import { useState, useEffect } from "react";
import "./App.css";

const Child = () => {
  useEffect(() => {
    console.log("adding new events");

    return () => {
      console.log("removing old events");
    };
  });

  useEffect(() => {
    console.log("mounted");

    return () => console.log("cleanup during unmunt");
  }, []);

  const [name, setName] = useState("");
  return (
    <div>
      I'm child component
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

function App() {
  const increment = () => {
    setCount(count + parseInt(extra));
  };
  const decrement = () => {
    setCount(count - extra);
  };

  const [count, setCount] = useState(0);
  const [extra, setExtra] = useState(0);

  useEffect(() => {
    //to call specific resource type ${}
    document.title = `Counter(${count})`;
  }, [count]);

  const [showChild, setShowChild] = useState(false);
  return (
    <div>
      <title>{count}</title>
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
        <input
          type={"checkbox"}
          value={showChild}
          checked={showChild}
          onChange={() => setShowChild(!showChild)}
        />
        {showChild ? <Child /> : null}
      </div>
    </div>
  );
}

export default App;
