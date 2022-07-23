import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((response) => setData(response));
    }, []);

    return (
      <>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Clear Data</button>
      </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
