import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./App";
import App2 from "./taskContext0604/context";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { MyContextProvider } from "./taskContext0604/useContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App2 />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </MyContextProvider>
);
