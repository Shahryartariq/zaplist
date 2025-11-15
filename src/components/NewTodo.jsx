import classes from "./NewTodo.module.css";

function NewTodo(props) {
  return (
    <div className={classes.formWrapper}>
      <form className={classes.form}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required onChange={props.onTitleChange} />
        </p>
        <p>
          <label htmlFor="body">Body</label>
          <textarea id="body" required rows={3} onChange={props.onBodyChange} />
        </p>
      </form>
    </div>
  );
}

export default NewTodo;
