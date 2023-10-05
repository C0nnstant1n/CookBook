import * as React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

interface Recipe {
  id: number;
  title: "string";
  recipe: "string";
}

export async function ContentLoader({ params }) {
  const response = await axios.get<Recipe>(
    `http://127.0.0.1:8000/api/recipe/${params.recipesId}`
  );
  return response.data;
}

export default function Content() {
  const data: Recipe = useLoaderData();
  return (
    <>
      <h2>{data.title}</h2>
      {/* <hr> */}
      <p>{data.recipe}</p>
    </>
  );
}
