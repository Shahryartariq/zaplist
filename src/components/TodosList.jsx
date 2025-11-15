import { useState } from "react";

import Todo from "./Todo";
import NewTodo from "./NewTodo";
import classes from "./TodosList.module.css";
import Modal from "./Modal";

function TodosList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => {
      return [postData, ...existingPosts];
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewTodo onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.todos}>
          {posts.map((post, index) => (
            <Todo key={index} title={post.title} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={classes.emptyTodo}>
          <h2>There is no todo yet. </h2>
          <p>Start Adding Some!</p>
        </div>
      )}
    </>
  );
}

export default TodosList;
