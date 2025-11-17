import classes from "./NewTodo.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

function NewTodo({}) {
  return (
    <Modal>
      <div className={classes.formWrapper}>
        <Form method="post" className={classes.form}>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="body">Body</label>
            <textarea id="body" name="body" required rows={3} />
          </p>
          <p className={classes.actions}>
            <Link to=".." type="button">
              Cancel
            </Link>
            <button type="submit">Add Todo</button>
          </p>
        </Form>
      </div>
    </Modal>
  );
}

export default NewTodo;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/todo", { 
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  });
  return redirect("/");
}
