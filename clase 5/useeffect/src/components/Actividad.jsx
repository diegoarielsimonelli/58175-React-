// En esta actividad, deberán crear una aplicación que muestre un contador y un mensaje de bienvenida en función de si el N° del contador es par o impar.
// Para lograrlo, utilizarán los hooks useState y useEffect.
// Deberán definir un estado para el contador y otro para el mensaje.
//  Luego, implementarán un useEffect que cambie el mensaje en función del valor del contador, utilizando el operador de módulo para verificar si es par o impar.
// Además, agregarán botones para incrementar y decrementar el contador.
// Deberán aplicar sus conocimientos en el manejo de estado, useEffect y renderizado en React para lograr que el mensaje de bienvenida se actualice automáticamente mientras el usuario interactúa con el contador.

import { useEffect, useState } from "react";

export default function Actividad() {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    count % 2 === 0 ? setMensaje("es par") : setMensaje("es impar");
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <h1>{mensaje}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}
