import { Todo } from "../model";

export type TodoState = {
  todos: Todo[];
};

type Actions =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "UPDATE_TODO"; payload: { id: string; text: string } };

export default function (state: TodoState, action: Actions) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo: Todo = {
        id: Math.random().toString(36).slice(2),
        text: action.payload,
        isDone: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                isDone: !todo.isDone,
              }
            : todo
        ),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                text: action.payload.text,
              }
            : todo
        ),
      };
    default:
      return state;
  }
}
