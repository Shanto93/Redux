import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import ToDoProvider from "./context/ToDoProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToDoProvider>
      <RouterProvider router={router} />
    </ToDoProvider>
  </StrictMode>
);
