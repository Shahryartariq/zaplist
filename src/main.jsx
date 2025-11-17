import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import router from "./routes/routes.jsx";
import { TodoProvider } from "./store/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </StrictMode>
);
