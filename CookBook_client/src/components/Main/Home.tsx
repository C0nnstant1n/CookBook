import * as React from "react";
import {
  NavLink,
  Link,
  useLoaderData,
  Outlet,
  useNavigation,
} from "react-router-dom";

type Category = {
  id: string;
  name: string;
};

export default function Home() {
  const categories: Category[] = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      <div id='sidebar'>
        <h1>
          <Link to={"/"}>Cooking Recipes </Link>
          &nbsp;
          <a
            target='_blank'
            rel='noreferrer'
            href='http://127.0.0.1:8000/swagger-ui/'
          >
            API
          </a>
        </h1>

        <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Поиск'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>Поиск</button>
          </form>
        </div>
        <nav>
          {categories.length ? (
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <NavLink to={`/recipes/${category.id}`}>
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>Нет категорий</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id='detail'
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
