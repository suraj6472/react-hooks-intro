import React, { useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const sound = useRef();
  const color = useRef();

  function submitHandler(e) {
    e.preventDefault(); 
    alert(sound.current.value + " -- " + color.current.value);
    sound.current.value = "";
    color.current.value = "";
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={sound} />
      <input type="color" ref={color} />
      <button>Add</button>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
