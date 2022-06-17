import "./App.css";
import React from "react";
import { Button, ListItem } from "./components/emotion";

function App() {
  const [item, setItem] = React.useState("");

  const [list, setList] = React.useState([]);

  function handleClick(e) {
    e.preventDefault();
    if (item === "") {
      return;
    } else {
      const newList = new Set(list);
      newList.add({ item, key: Date.now() });
      setList([...newList]);
    }
  }

  function removeItem(key) {
    setList(list.filter((user) => user.key !== key));
  }

  return (
    <div className="App">
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />

        <Button onClick={handleClick}>Add to List</Button>
      </form>
      <div>
        {list.length > 0 &&
          list.map((value) => {
            return (
              <ListItem key={value.key}>
                {value.item}
                <Button onClick={() => removeItem(value.key)}>remove</Button>
              </ListItem>
            );
          })}
      </div>
    </div>
  );
}

export default App;
