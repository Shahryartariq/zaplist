import { useState } from "react";
import classes from "./NewTodo.module.css";

function NewTodo({ onCancel, onAddPost }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  function changeTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      title: enteredTitle,
      body: enteredBody,
    };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  }

  return (
    <div className={classes.formWrapper}>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required onChange={changeTitleHandler} />
        </p>
        <p>
          <label htmlFor="body">Body</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Add Todo</button>
        </p>
      </form>
    </div>
  );
}

export default NewTodo;
