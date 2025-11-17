import { useLoaderData, Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./TodoDetails.module.css";

function TodoDetails() {
  const post = useLoaderData();
  const navigate = useNavigate();

  async function handleDelete() {
    await fetch(`http://localhost:8080/todos/${post.id}`, {
      method: "DELETE",
    });
    navigate("..", { replace: true });
  }

  return (
    <Modal>
      <main className={classes.details}>
        <h2 className={classes.title}>{post.title}</h2>
        <p className={classes.text}>{post.body}</p>

        <div className={classes.actions}>
          <Link to=".." className={classes.button}>
            Close
          </Link>
          <Link to={`/edit/${post.id}`} className={classes.buttonSecondary}>
            Edit
          </Link>
          <button onClick={handleDelete} className={classes.buttonDanger}>
            Delete
          </button>
        </div>
      </main>
    </Modal>
  );
}

export default TodoDetails;

export async function loader({ params }) {
  const response = await fetch(`http://localhost:8080/todos/${params.id}`);
  const resData = await response.json();
  console.log("Fetching todo details for ID:", resData);

  return {
    id: resData.todo.id,
    title: resData.todo.title,
    body: resData.todo.body,
  };
}
