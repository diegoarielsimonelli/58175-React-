import { useEffect, useState } from "react";

export default function Actividad2() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count % 2 === 0) {
      setMessage("¡El contador es par!");
    } else {
      setMessage("¡El contador es impar!");
    }
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
      <p>{message}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}
