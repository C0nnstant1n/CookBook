import * as React from "react";
import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";

interface Recipe {
  id: number;
  title: string;
}

interface Category {
  id: number;
  name: string;
  recipe: Recipe[];
}

interface Params {
  contentId: number;
}

export async function categoryLoader({ params }: { params: Params }) {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/category/${params.contentId}`
  );
  return response.data;
}

export default function Content() {
  const data: Category = useLoaderData();
  return (
    <>
      {data.recipe.map((recipe) => (
        <div id='content' key={recipe.id}>
          <div>
            <h1>{recipe.title}</h1>
            <Link to={`/recipe/${recipe.id}`}>подробнее</Link>
          </div>
        </div>
      ))}
    </>
  );
}
