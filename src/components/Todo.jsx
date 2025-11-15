import classes from './Todo.module.css';


function Todo(props) {
  return (
    <li className={classes.todo}>
      <p className={classes.todo_title}>Title: {props.title}</p>
      <p className={classes.todo_body}>{props.body}</p>
    </li>
  );
}

export default Todo;
