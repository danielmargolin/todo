import { Fragment } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList/ShoppingList";

import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <TodoList />
      <ShoppingList />
    </>
  );
}

export default App;
