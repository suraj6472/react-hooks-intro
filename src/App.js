import React from "react";
import { useTrees } from "./index";

function App() {
  const trees = useTrees();
  return (
    <div>
      <h1>Tree, I have heard of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
