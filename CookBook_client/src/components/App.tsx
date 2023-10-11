import * as React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import ErrorPage from "../error-page";
import axios from "axios";
import Home from "./Main/Home";
import ContentList, { CategoryLoader } from "./Main/ContentList";
import Content, { ContentLoader } from "./Main/Content";

async function loader() {
  const response = await axios.get(`http://127.0.0.1:8000/api/category/`);
  return response.data;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className='home'>
          <h1>Добро Пожаловать</h1>
          <Link to='recipes'>Кулинарная книга</Link>
          <a
            target='_blank'
            rel='noreferrer'
            href='http://127.0.0.1:8000/swagger-ui/'
          >
            API
          </a>
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "recipes",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: loader,
    children: [
      {
        index: true,
        element: <h2>Выберите Категорию</h2>,
      },
      {
        path: ":recipesId",
        element: <ContentList />,
        loader: CategoryLoader,
      },
      {
        path: ":recipesId/recipe/:recipeId",
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
