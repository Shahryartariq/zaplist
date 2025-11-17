import { createBrowserRouter } from "react-router-dom";

import Todos, { loader as todosLoader } from "../routes/Todos.jsx";
import NewTodo, { action as newTodoAction } from "../routes/NewTodo.jsx";
import TodoDetails, { loader as todoDetailsLoader } from "../routes/TodoDetails.jsx";
import RootLayout from "../routes/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Todos />,
        loader: todosLoader,
      },
      {
        path: "create-todo",
        element: <NewTodo />,
        action: newTodoAction,
      },
      {
        path: "todo/:id",
        element: <TodoDetails />,
        loader: todoDetailsLoader,
      },
    ],
  },
]);

export default router;
