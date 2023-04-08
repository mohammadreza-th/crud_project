import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Container, Header, List } from "semantic-ui-react";
import Create from "./components/Create";
import pkg from "semantic-ui-react/package.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import Delete from "./components/Delete";

const router = createBrowserRouter([
  {
    path: "/read",
    element: <App></App>,
  },
  {
    path: "/update",
    element: (
      <App>
        <Update />
      </App>
    ),
  },

  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/delete",
    element: (
      <App>;lkjsdf</App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
