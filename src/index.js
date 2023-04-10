import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Create from "./components/Create";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import Delete from "./components/Delete";
import HomePage from "./components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <HomePage />
      </App>
    ),
  },{
    path: "/read",
    element: (
      <App>
        <Read />
      </App>
    ),
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
    element: (
      <App>
        <Create />
      </App>
    ),
  },
  {
    path: "/delete",
    element: (
      <App>
        <Delete />
      </App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
