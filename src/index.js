import React from "react";
import ReactDOM from "react-dom";
import { useFetch } from "./useFetch";

function App({ userlogin }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${userlogin}`
  );
  console.log(loading, data, error);
  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

ReactDOM.render(
  <App userlogin="suraj6472" />,

  document.getElementById("root")
);
