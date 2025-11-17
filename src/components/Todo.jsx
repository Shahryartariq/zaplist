import { Link } from "react-router-dom";
import classes from "./Todo.module.css";

function Todo({ id, title, body }) {
  console.log("Todo component rendered: " + id);
  return (
    <li className={classes.todo}>
      <Link to={`/todo/${id}`} className={classes.todo_link}>
        <p className={classes.todo_title}>{title}</p>
        <p className={classes.todo_body}>{body}</p>
      </Link>
    </li>
  );
}

export default Todo;
