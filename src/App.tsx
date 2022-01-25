import { useReducer, useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { TodoContext } from "./context/TodoContext";
import { Todo } from "./model";
import todoReducer from "./reducers/todoReducer";

let personName: unknown; // recommended instead to any

const initialState = {
  todos: [],
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleAddTodo = (text: string) => {
    dispatch({
      type: "ADD_TODO",
      payload: text,
    });
  };

  const handleDeleteTodo = (id: string) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };
  const handleToggleTodo = (id: string) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };
  const handleEditTodo = (id: string, text: string) => {
    // setTodos((prevTodos) =>
    //   prevTodos.map((todo) =>
    //     todo.id === id
    //       ? {
    //           ...todo,
    //           text,
    //         }
    //       : todo
    //   )
    // );
    dispatch({ type: "UPDATE_TODO", payload: { id, text } });
  };
  const { todos } = state;
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo: handleAddTodo,
        removeTodo: handleDeleteTodo,
        toggleTodo: handleToggleTodo,
        updateTodo: handleEditTodo,
      }}
    >
      <div className="App">
        <h1 className="heading">Taskify</h1>
        <InputField />
        {todos.length > 0 && (
          <div className="container">
            <TodoList />
          </div>
        )}
      </div>
    </TodoContext.Provider>
  );
}

export default App;
