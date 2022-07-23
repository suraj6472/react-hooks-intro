import React, { useReducer } from "react";
import ReactDOM from "react-dom";

function App() {
  const [number, setNumber] = useReducer((number, newNumber) => {
    return number + newNumber;
  }, 0);

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(2)}>Click</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
