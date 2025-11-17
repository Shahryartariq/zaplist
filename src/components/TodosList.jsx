import Todo from "./Todo";
import classes from "./TodosList.module.css";
import { useLoaderData } from "react-router-dom";

function TodosList() {
  const todos = useLoaderData();

  return (
    <>
      {todos.length > 0 && (
        <ul className={classes.todos}>
          {todos.map((todo) => (
            <Todo key={todo.id} id={todo.id} title={todo.title} body={todo.body} />
          ))}
        </ul>
      )}
      {todos.length === 0 && (
        <div className={classes.emptyTodo}>
          <h2>There is no todo yet. </h2>
          <p>Start Adding Some!</p>
        </div>
      )}
    </>
  );
}

export default TodosList;
