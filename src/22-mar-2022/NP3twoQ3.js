// Problem: Add Todos on click of submit button. On clicking any of the todos, it has to be marked. i.e -> completed todos become incomplete and vice versa.

import { useState } from "react";

export default function NP3twoQ3() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addToList = () => {
    setTodoList((items) => [
      ...items,
      { item: todoItem, completed: false, id: Math.random() }
    ]);
    setTodoItem("");
  };

  const markTodo = (item) => {
    setTodoList((todos) =>
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <input value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
      <button onClick={addToList}>Add Item</button>
      {todoList.map((item) => (
        <div className="todo-card" key={item.id}>
          <p onClick={() => markTodo(item)}>{item.item}</p>
          <p>Status: {item.completed ? "completed" : "to-do"}</p>
        </div>
      ))}
    </div>
  );
}
