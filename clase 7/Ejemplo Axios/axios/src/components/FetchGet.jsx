import { useState, useEffect } from "react";
import axios from "axios";

export default function FetchGet() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(({ data }) => setData(data)); // Desestructurar data de la respuesta
  }, []);

  return (
    <div style={{ color: "white" }}>
      <h1>FetchGet</h1>
      {/* <h1> Titulo: {data.title}</h1>
      <h2>Id: {data.id}</h2> */}

      <ul>
        {data.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
