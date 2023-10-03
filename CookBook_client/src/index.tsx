import * as React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
import "./style.css";
import {
  createBrowserRouter,
  RouterProvider,
  // useLoaderData,
} from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Main from "./components/Main/Main";
// import Header from "./components/Main/Header/Content";
// import Content, { categoryLoader } from "./components/Main/Categories/Content";
import Home from "./components/Main/Home/Home";
import axios from "axios";

async function loader() {
  const response = await axios.get(`http://127.0.0.1:8000/api/category/`);
  return response.data;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "categories",
        element: <Main />,
        loader: loader,
      },
      {
        path: "category/:categoryId",
        Component() {
          return (
            <>
              <div id='detail'>
                <h1>kjlkjslkjdf</h1>
              </div>
            </>
          );
        },
        loader: loader,
      },
    ],
  },
]);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
