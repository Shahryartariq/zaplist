import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import Todos, { loader as todosLoader } from "./routes/Todos.jsx";
import NewTodo, { action as newTodoAction } from "./routes/NewTodo.jsx";
import TodoDetails, { loader as todoDetailsLoader }   from "./routes/TodoDetails.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Todos />,
        loader: todosLoader,
        children: [
          { path: "/create-todo", element: <NewTodo />, action: newTodoAction },
          { path: "/todo/:id", element: <TodoDetails />, loader: todoDetailsLoader },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
