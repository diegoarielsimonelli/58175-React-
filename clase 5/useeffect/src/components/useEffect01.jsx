import { useEffect, useState } from "react";

const UseEffect01 = () => {
  const [fecha, setFecha] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setFecha(new Date());
    }, 5000);
  }, []);

  return (
    <div>
      <h1>Prueba 02</h1>
      <h2>Fecha: {`${fecha.toLocaleString()}`}</h2>
    </div>
  );
};
export default UseEffect01;
