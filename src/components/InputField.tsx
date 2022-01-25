import React, { useContext, useRef, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import "./styles.css";

// type InputFieldProps = {
//   onSubmit: (text: string) => void;
// };

export const InputField = () => {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo.trim().length === 0) return;
    addTodo(todo);
    setTodo("");
    inputRef.current?.blur();
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={todo}
        onChange={({ target }) => setTodo(target.value)}
        placeholder="Enter a task"
        className="input__box"
      />
      <button type="submit" className="input__submit">
        Go
      </button>
    </form>
  );
};
