import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [sound, setSound] = useState('');
  const [color, setColor] = useState('#000000');
  function submitHandler(e) {
    e.preventDefault(); 
    alert(`${sound}  -- ${color}`);
    setColor('#000000')
    setSound('');
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={(e) => setSound(e.target.value)} value={sound} />
      <input type="color" onChange={(e) => setColor(e.target.value)} value={color} />
      <button>Add</button>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
