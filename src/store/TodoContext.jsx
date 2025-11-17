import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function setInitialTodos(data) {
    setTodos(data);
  }

  function addTodo(newTodo) {
    setTodos(prev => [...prev, newTodo]);
  }

  function updateTodo(updatedTodo) {
    setTodos(prev => prev.map(t => t.id === updatedTodo.id ? updatedTodo : t));
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  return (
    <TodoContext.Provider value={{ todos, setInitialTodos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
