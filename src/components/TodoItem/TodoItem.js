import { useState } from "react";


const TodoItem = ({ text, isCompleted, onComplete, onDelete }) => {

  return (
    <li className="todo-item">
      <input type="checkbox" checked={isCompleted} onChange={onComplete} />
      <span style={isCompleted ? { textDecoration: "line-through" } : {}}>
        {text}
      </span>
      <div onClick={onDelete} className="delete-todo">
        Delete
      </div>
    </li>
  );
};

export default TodoItem;
