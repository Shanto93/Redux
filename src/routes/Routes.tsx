import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ToDoForm from "../pages/ToDoForm/ToDoForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <ToDoForm></ToDoForm>,
      },
    ],
  },
]);
