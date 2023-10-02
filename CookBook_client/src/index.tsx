import * as React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Main from "./components/Main/Main";
// import Header from "./components/Main/Header/Content";
import Content from "./components/Main/Categories/Content";
import Home from "./components/Main/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/categories",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "content/:contentId",
        element: <Content />,
        loader: async () => {
          return fetch(`127.0.0.1:8000/api/category`);
        },
      },
    ],
  },
]);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
