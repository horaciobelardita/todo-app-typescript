import { Todo } from "../model";
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from "react-icons/ai";
import React, { useContext, useEffect, useRef, useState } from "react";
import { TodoContext } from "../context/TodoContext";
type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, removeTodo, updateTodo } = useContext(TodoContext);
  const [editMode, setEditMode] = useState(false);
  const [todoText, setTodoText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    editMode && inputRef.current?.focus();
  }, [editMode]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // onEdit(todo.id, todoText);
    updateTodo(todo.id, todoText);
    setEditMode(false);
  };
  const { text, isDone } = todo;

  return (
    <form className="todo" onSubmit={handleSubmit}>
      {editMode ? (
        <input
          ref={inputRef}
          onChange={({ target }) => setTodoText(target.value)}
          className="todo__text--input"
          type="text"
          value={todoText}
        />
      ) : (
        <span className={`todo__text ${isDone ? "todo__text--done" : ""}`}>
          {text}
        </span>
      )}
      <div>
        <span className="icon" onClick={() => setEditMode(true)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => removeTodo(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => toggleTodo(todo.id)}>
          <AiOutlineFileDone />
        </span>
      </div>
    </form>
  );
};
