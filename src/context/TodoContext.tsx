import { createContext } from "react";
import { Todo } from "../model";

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
};

export const TodoContext = createContext({
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
  toggleTodo: (id: string) => {},
  updateTodo: (id: string, text: string) => {},
} as TodoContextType);
