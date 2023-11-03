import { useState } from "react";
import Animation from "../animations/ExampleAnimation";
export default function Promesas() {
  const [promesa, setPromesa] = useState("");
  const [loading, setLoading] = useState(false);

  function eventoFuturo(res) {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res) {
          setPromesa("Promesa resuelta");
          resolve("Promesa resuelta");
        } else {
          setPromesa("Promesa rechazada");
          reject("Promesa rechazada");
        }
        setLoading(false);
      }, 2000);
    });
  }

  return (
    <>
      <h1>Promesas</h1>

      {loading ? (
        <h2>
          <Animation />
        </h2>
      ) : (
        <h2>{promesa}</h2>
      )}

      <button onClick={() => eventoFuturo(true)}>Fullfilled</button>
      <button onClick={() => eventoFuturo(false)}>Rejected</button>
    </>
  );
}
