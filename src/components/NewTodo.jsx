import classes from "./NewTodo.module.css";

function NewTodo({onTitleChange, onBodyChange, onCancel}) {
  return (
    <div className={classes.formWrapper}>
      <form className={classes.form}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required onChange={onTitleChange} />
        </p>
        <p>
          <label htmlFor="body">Body</label>
          <textarea id="body" required rows={3} onChange={onBodyChange} />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit">Add Todo</button>
        </p>

      </form>
    </div>
  );
}

export default NewTodo;
