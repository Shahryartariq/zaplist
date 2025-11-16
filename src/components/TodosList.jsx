import { useEffect, useState } from "react";

import Todo from "./Todo";
import NewTodo from "./NewTodo";
import classes from "./TodosList.module.css";
import Modal from "./Modal";

function TodosList({ isPosting, onStopPosting }) {
  const [todos, setTodos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/todos");
      const resData = await response.json();
      const formattedData = resData.todos.map((item) => ({
        id: item.id,
        title: item.title,
        body: item.body,
      }));
      setTodos(formattedData);
      setIsFetching(false);
    }
    fetchTodos();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/todo", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    });
    setTodos((existingTodos) => {
      return [postData, ...existingTodos];
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewTodo onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && todos.length > 0 && (
        <ul className={classes.todos}>
          {todos.map((todo, index) => (
            <Todo key={todo.id} title={todo.title} body={todo.body} />
          ))}
        </ul>
      )}
      {!isFetching && todos.length === 0 && (
        <div className={classes.emptyTodo}>
          <h2>There is no todo yet. </h2>
          <p>Start Adding Some!</p>
        </div>
      )}

      {isFetching && (
        <div className={classes.emptyTodo}>
          <h2>Loading Data ... </h2>
        </div>
      )}
    </>
  );
}

export default TodosList;
