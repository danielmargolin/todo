import { useContext } from "react";
import { TodoListContext } from "../TodoList/TodoList";

const TodoItem = ({ id, text, isCompleted, onDelete = () => {} }) => {
  const { onToggle: onComplete } = useContext(TodoListContext);

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => {
          onComplete(id);
        }}
      />
      <span style={isCompleted ? { textDecoration: "line-through" } : {}}>
        {text}
      </span>
      <div className="delete-todo" onClick={() => onDelete(id)}>
        Delete
      </div>
    </li>
  );
};

export default TodoItem;
