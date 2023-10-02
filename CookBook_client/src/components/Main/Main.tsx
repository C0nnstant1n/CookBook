import * as React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

export default function Main() {
  const { categories } = useLoaderData();
  console.log(categories);

  return (
    <>
      {/* <Header /> */}
      <div id='sidebar'>
        <h1>Cooking Recipes</h1>
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
          <ul>
            <li>
              <Link to={"content/1"}>выбор</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
}
