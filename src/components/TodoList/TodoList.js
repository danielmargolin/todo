import { useReducer } from "react";
import { addTodo } from "../../actions/todos";
import todosReducer, { initialState } from "../../reducers/todoReducer";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  const onAddTodo = () => {
    dispatch(addTodo({ text: "test", isCompleted: false }));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem {...todo} />
        ))}
      </ul>
      <button onClick={onAddTodo}>Add todo</button>
    </div>
  );
};
export default TodoList;
