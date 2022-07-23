import React, { useReducer } from "react";
import ReactDOM from "react-dom";

const initialState = {
  message: "hi",
};

function reducer(state, action) {
  switch (action.type) {
    case "YELL":
      return {
        message: `hey! i just said ${state.message}`,
      };

    case "whisper":
      return {
        message: `excuse me, I just said ${state.message}`,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>{state.message}</p>
      <button onClick={() => dispatch({ type: "YELL" })}>YEll</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
