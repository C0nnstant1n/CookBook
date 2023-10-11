import * as React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";

interface Recipe {
  id: number;
  title: "string";
  recipe: "string";
}

export async function ContentLoader({ params }) {
  const response = await axios.get<Recipe>(
    `http://127.0.0.1:8000/api/recipe/${params.recipeId}`
  );
  return response.data;
}

export default function Content() {
  const data: Recipe = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <h2>{data.title}</h2>
      {/* <hr> */}
      <p>{data.recipe}</p>
      <div className='comeback'>
        <button
          className='back-button'
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        >
          Назад
        </button>
      </div>
    </>
  );
}
