import * as React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
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
        <Link to={"categories"}>Категории</Link>
        <Outlet />
      </div>
    </>
  );
}
