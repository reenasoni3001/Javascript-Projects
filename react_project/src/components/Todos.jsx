import React from "react";
import TodoItem from "./TodoItems";

const Todos = ({ todos, onDelete, resetItems }) => {
  return (
    <div className="container my-3">
      <h3 className=" my-3">Todos List</h3>

      {todos.length === 0 ? (
        <button className="btn btn-sm btn-info" onClick={resetItems}>
          reset{" "}
        </button>
      ) : (
        todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.key}
              onDelete={() => onDelete(todo)}
            />
          );
        })
      )}
    </div>
  );
};

export default Todos;
