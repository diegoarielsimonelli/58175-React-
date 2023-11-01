import { useEffect, useState } from "react";

function IntervalComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Iniciar el intervalo cuando el componente se monta
    const intervalId = setInterval(() => {
      // Utiliza una función para actualizar el estado
      setCount((count) => count + 1);
    }, 1000); // Cada 1000 ms (1 segundo)

    // Limpiar el intervalo cuando el componente se desmonta
    return () => {
      console.log("desmontar");
      clearInterval(intervalId);
    };
  }); // El segundo argumento, un array vacío, garantiza que esto solo se ejecuta una vez al montar el componente.

  return (
    <div>
      <h1>Interval Component</h1>
      <p>Contador: {count}</p>
    </div>
  );
}

export default IntervalComponent;
