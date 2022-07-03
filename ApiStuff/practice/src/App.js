import React from "react";

function App() {
  const [item, setItem] = React.useState("");
  const [list, setList] = React.useState([]);

  function addToList() {
    if (!item) {
      return;
    }
    setList([...list, { item, key: Date.now(), isDone: false }]);
    setItem("");
  }

  function markAsDone(key) {
    setList();
  }

  function removeItem(key) {
    setList(
      list.filter((listItem) => {
        return listItem.key !== key;
      })
    );
  }

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={addToList}>Add items</button>
      </div>
      <ul>
        {list.map((value) => {
          return (
            <li key={value.key}>
              <input
                type={"checkbox"}
                value={value.isDone}
                onClick={() => markAsDone(value.key)}
              />
              {value.item}
              <button onClick={() => removeItem(value.key)}>remove item</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
