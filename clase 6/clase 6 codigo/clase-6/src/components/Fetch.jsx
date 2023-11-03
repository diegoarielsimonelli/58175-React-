import { useState, useEffect } from "react";

export default function Fetch() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setArray(json));
  }, []);

  return (
    <>
      <h1>Fetch</h1>
      {array.map((objeto) => (
        <div key={objeto.id}>
          <span>{objeto.title}</span>
          {objeto.completed ? (
            <p>Tarea completada 😁</p>
          ) : (
            <p>Tarea incompleta 😅</p>
          )}
        </div>
      ))}
    </>
  );
}
