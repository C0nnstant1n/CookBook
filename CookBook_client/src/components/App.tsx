import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../error-page.tsx";
import axios from "axios";
import Categories from "./Main/Categories.tsx";
import ContentList, { categoryLoader } from "./Main/ContentList.tsx";
import Content, { ContentLoader } from "./Main/Content.tsx";
import Plug from "./Main/plug.tsx";

async function loader() {
  const response = await axios.get(`http://127.0.0.1:8000/api/category/`);
  return response.data;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Categories />,
    errorElement: <ErrorPage />,
    loader: loader,
    children: [
      {
        index: true,
        element: <Plug />,
      },
      {
        path: "recipes/:Id",
        element: <ContentList />,
        loader: categoryLoader,
      },
      {
        path: "recipe/:Id",
        element: <Content />,
        loader: ContentLoader,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </>
  );
}
