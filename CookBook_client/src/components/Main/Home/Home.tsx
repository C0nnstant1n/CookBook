import * as React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className='home'>
        <h1>Добро Пожаловать на Сайт Кулинарных Рецептов</h1>
        <Link to={"/categories"}>выбор</Link>
      </div>
    </>
  );
}
