import * as React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export async function ContentLoader({ params }) {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/recipe/${params.Id}`
  );
  return response.data;
}

export default function Content() {
  const data = useLoaderData();
  return (
    <>
      <h2>{data.title}</h2>
      {/* <hr> */}
      <p>{data.recipe}</p>
    </>
  );
}
