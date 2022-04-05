import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import todosMocks from "./todos.mock";
import { Footer } from "./components/Footer";
import { AddTodo } from "./components/AddTodo";

function App() {
  const reset = () => {
    setTodos(todosMocks);
  };

  const onDelete = (todo) => {
    const newTodos = todos.filter((t) => {
      const result = t !== todo;
      return result;
    });
    setTodos(newTodos);
    localStorage.setItem("savedData", JSON.stringify(newTodos));
  };

  function addTodo(title, desc) {
    let key = todos.length + 1;

    const myTodo = {
      key: key,
      title: title,
      desc: desc,
    };
    const newTodo = [myTodo, ...todos];
    setTodos(newTodo);
    localStorage.setItem("savedData", JSON.stringify(newTodo));
  }

  const getSavedTodos = () => {
    //fetch the data prerent in local sorage
    const savedData = localStorage.getItem("savedData");
    //if data in ls then show data
    if (savedData !== null) {
      return JSON.parse(savedData);
    } else {
      //if no data in LS, save in LS and  then show default value
      localStorage.setItem("savedData", JSON.stringify(todosMocks)); // "todosMocks" todosMocks
      return todosMocks;
    }
  };

  const [todos, setTodos] = useState(getSavedTodos());

  return (
    <>
      <Header title="Todo List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} resetItems={reset} />
      <Footer />
    </>
  );
}

export default App;
