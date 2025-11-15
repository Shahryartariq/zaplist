import Todo from "./Todo";
import NewTodo from "./NewTodo";
import classes from "./TodosList.module.css";
import { useState } from "react";

function TodosList() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  function changeTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      <NewTodo onTitleChange={changeTitleHandler} onBodyChange={changeBodyHandler} />
      <ul className={classes.todos}>
        <Todo title={enteredTitle} body={enteredBody} />
        <Todo title="Task 2" body="Review the project plan." />
        <Todo title="Task 3" body="Prepare for the client meeting." />
      </ul>
    </>
  );
}

export default TodosList;
