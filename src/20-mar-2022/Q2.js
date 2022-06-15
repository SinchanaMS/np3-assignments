import { useState } from "react";
import "../styles.css";
import { todos } from "./database/todos";

// - Your challenge is to add a filter to do the following
//     - Show completed todos
//     - Show incomplete todos
//     - Show all todos
// - The todos data structure is as follows

export default function Q2() {
  const [todoList, setTodoList] = useState(todos);

  const showCompletedList = () => {
    setTodoList(todos.filter((item) => item.completed));
  };

  const showIncompleteList = () => {
    setTodoList(todos.filter((item) => !item.completed));
  };

  const showAll = () => {
    setTodoList(todos);
  };

  return (
    <div>
      <h1>To-do List</h1>
      <button onClick={showCompletedList}>Completed To-dos</button>
      <button onClick={showIncompleteList}>Incomplete To-dos</button>
      <button onClick={showAll}>All To-dos</button>

      <ul>
        {todoList.map((item) => (
          <div className="todo-card" key={item.id}>
            <p>Title: {item.title}</p>
            <p>Completed: {item.completed ? "true" : "false"}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

// time taken: 10mins
