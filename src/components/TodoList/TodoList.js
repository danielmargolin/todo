import { useState } from "react";

import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Build a todo app", isCompleted: true },
    { id: 3, text: "Deploy to production", isCompleted: false },
  ]);

  const onComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onComplete={() => onComplete(todo.id)}
            onDelete={() => onDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
