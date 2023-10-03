import * as React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

type Category = {
  id: string;
  name: string;
};

export default function Main() {
  const categories: Category[] = useLoaderData();

  return (
    <>
      <nav>
        {categories.length ? (
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink to={`/category/${category.id}`}>
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
    </>
  );
}
