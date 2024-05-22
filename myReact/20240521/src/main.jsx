import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Pets } from "./pages/Pets";
import { Medications } from "./pages/Medications";
import { PetLog } from "./pages/PetLog";
import { AddPet } from "./pages/Add";
import "./index.css";
import { Navigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/pets" />,
      },
      {
        path: "/pets",
        element: <Pets />,
      },
      {
        path: "/medications",
        element: <Medications />,
      },
      {
        path: "/logs/:id",
        element: <PetLog />,
      },
      {
        path: "/add",
        element: <AddPet />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
