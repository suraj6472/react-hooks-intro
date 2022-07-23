import React, { useReducer } from "react";
import ReactDOM from "react-dom";

function App() {
    const [checked, toggle] = useReducer((checked) => !checked, false);
    return (
      <>
        <input type="checkbox" onChange={toggle} value={checked} />{" "}
        {checked ? "checked" : "unchecked"}
      </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
