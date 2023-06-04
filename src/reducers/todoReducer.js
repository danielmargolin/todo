import { ADD_TODO } from "../actions/todos";

export const initialState = [
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Build a todo app", isCompleted: true },
    { id: 3, text: "Deploy to production", isCompleted: false },
  ];
  
const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todosReducer;
