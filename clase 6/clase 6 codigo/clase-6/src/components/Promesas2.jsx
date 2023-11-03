import { useState } from "react";

export default function Promesas2() {
  const [promesa, setPromesa] = useState("");

  function eventoFuturo(res) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        res ? resolve("Promesa resuelta") : reject("Promesa rechazada");
      }, 2000);
    });
  }

  function handleFullfilled() {
    eventoFuturo(true)
      .then((result) => setPromesa(result))
      .catch((error) => setPromesa(error))
      .finally(() => console.log("Siempre se ejecuta"));
  }

  function handleRejected() {
    eventoFuturo(false)
      .then((result) => setPromesa(result))
      .catch((error) => setPromesa(error));
  }

  return (
    <>
      <h1>Promesas 2</h1>
      <h2>{promesa}</h2>
      <button onClick={handleFullfilled}>Fullfilled</button>
      <button onClick={handleRejected}>Rejected</button>
    </>
  );
}
