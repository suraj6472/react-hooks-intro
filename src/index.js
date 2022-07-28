import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const TreesContaxt = createContext();

export const useTrees = () => useContext(TreesContaxt);

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Family" },
  { id: "4", type: "Component" },
];

ReactDOM.render(
  <TreesContaxt.Provider value={trees}>
    <App />
  </TreesContaxt.Provider>,

  document.getElementById("root")
);
