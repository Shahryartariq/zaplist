import classes from './Todo.module.css';


function Todo({title, body}) {
  return (
    <li className={classes.todo}>
      <p className={classes.todo_title}>{title}</p>
      <p className={classes.todo_body}>{body}</p>
    </li>
  );
}

export default Todo;
