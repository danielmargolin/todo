import { useState, createContext } from "react";
import List from "../common/List/List";

import TodoItem from "../TodoItem/TodoItem";

export const TodoListContext = createContext({});

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Build a todo app", isCompleted: true },
    { id: 3, text: "Deploy to production", isCompleted: false },
  ]);

  const onToggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoListContext.Provider value={{ onToggle }}>
        <List
          items={todos}
          onChange={setTodos}
          // component={({ item, onDelete }) => (
          //   <TodoItem onComplete={onToggle} onDelete={onDelete} item={item} />
          // )}
          component={TodoItem}
        />
      </TodoListContext.Provider>
    </div>
  );
};
export default TodoList;
