import React from "react";
import ReactDOM from "react-dom";
import { useInput } from "./useInput";

function App() {
  const [soundProps, resetSound] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  function submitHandler(e) {
    e.preventDefault();
    alert(`${soundProps.value}  -- ${colorProps.value}`);
    resetColor();
    resetSound();
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" {...soundProps} />
      <input type="color" {...colorProps} />
      <button>Add</button>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
