import { Outlet } from "react-router-dom";
import TodosList from "../components/TodosList";

function Todos() {
  return (
    <>
      <Outlet />
      <main>
        <TodosList />
      </main>
    </>
  );
}

export default Todos;

export async function loader() {
  const response = await fetch("http://localhost:8080/todos");
  const resData = await response.json();
  const formattedData = resData.todos.map((item) => ({
    id: item.id,
    title: item.title,
    body: item.body,
  }));
  return formattedData;
}
