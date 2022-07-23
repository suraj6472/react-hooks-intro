import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(name);
  });

  useEffect(() => {
    console.log(admin);
  }, [admin]);
  return (
    <section>
      <p>Congratulations {name}</p>
      <button onClick={() => setName("Will")}>Change Winner</button>

      <p>{admin ? "admin" : "not Admin"}</p>
      <button onClick={() => setAdmin(true)}>Make Admin</button>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
