import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./pages/dashboard.jsx";
import Income from "./pages/income.jsx";
import Expenses from "./pages/Expenses.jsx";
import Goals from "./pages/goals.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This means this route will match the path "/"
        element: <Dashboard />,
      },
      {
        path: "income/",
        element: <Income />,
      },
      {
        path: "expenses/",
        element: <Expenses />,
      },
      {
        path: "goals/",
        element: <Goals />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
