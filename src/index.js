import React, { useState } from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

function StarRating({ totalStars }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} out of {totalStars} stars
      </p>
    </>
  );
}

function App() {
  return <StarRating totalStars={10} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
