import { useState } from "react";

const FechaContador = () => {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);

  function actualizarEstados() {
    setCount(count + 1);
    setDate(new Date());
  }

  return (
    <>
      <h2>{date.toLocaleString()}</h2>
      <h2>{count}</h2>
      <button onClick={actualizarEstados}>Actualizar fecha y contador</button>
    </>
  );
}
export default FechaContador;