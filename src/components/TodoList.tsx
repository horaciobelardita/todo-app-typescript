import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../model";
import "./styles.css";
import { TodoItem } from "./TodoItem";

// type TodoListProps = {
//   todos: Todo[];
//   onDelete: (id: string) => void;
//   onToggleTodo: (id: string) => void;
//   onEdit: (id: string, text: string) => void;
// };

export const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
