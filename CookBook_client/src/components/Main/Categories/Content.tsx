import * as React from "react";
import { Form } from "react-router-dom";

type Content = {
  title: string;
  avatar: string | undefined;
  notes: string;
  favorite: boolean;
};

export default function Content() {
  const content: Content = {
    title: "title",
    avatar: "https://placekitten.com/g/200/200",
    notes:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sint, neque tenetur ea, placeat cupiditate nam quas totam provident ex tempore delectus nemo magni? Ducimus quis placeat soluta dolore eos?",
    favorite: false,
  };

  return (
    <div id='content'>
      <div>
        <img key={content.avatar} src={content.avatar || "null"} />
      </div>

      <div>
        <h1>
          {content.title}
          <Favorite content={content} />
        </h1>

        {content.notes && <p>{content.notes}</p>}

        <div>
          <Form action='edit'>
            <button type='submit'>Edit</button>
          </Form>
          <Form
            method='post'
            action='destroy'
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type='submit'>Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ content }: { content: Content }) {
  // yes, this is a `let` for later
  const favorite = content.favorite;
  return (
    <Form method='post'>
      <button
        name='favorite'
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
