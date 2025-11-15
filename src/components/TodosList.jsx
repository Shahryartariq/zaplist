import { useState } from "react";

import Todo from "./Todo";
import NewTodo from "./NewTodo";
import classes from "./TodosList.module.css";
import Modal from "./Modal";

function TodosList({isPosting, onStopPosting}) {
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
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewTodo onTitleChange={changeTitleHandler} onBodyChange={changeBodyHandler} onCancel={onStopPosting} />
        </Modal>
      )}

      <ul className={classes.todos}>
        <Todo title={enteredTitle} body={enteredBody} />
        <Todo title="Task 2" body="Review the project plan." />
        <Todo title="Task 3" body="Prepare for the client meeting." />
      </ul>
    </>
  );
}

export default TodosList;
