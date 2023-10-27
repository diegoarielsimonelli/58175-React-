import { useState } from "react";
import Saludo from "./components/Saludo/Saludo";
import Hola from "./components/Hola/Hola";
import "./App.css";
import Tarjeta from "./components/Tarjeta/Tarjeta";
const PUERTO = "9090";

function App() {
  const [count, setCount] = useState(0);
  const [mostrar, setMostrar] = useState(true);
  const [nombre, setNombre] = useState("Diego");
  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      {/* {count <= 0 || <button onClick={() => setCount(count - 1)}>-</button>}
      {count > 0 && <button onClick={() => setCount(count - 1)}>-</button>} */}
      <hr />
      {mostrar ? "Hola Coder" : "hola Diego"}
      <button onClick={() => setMostrar(!mostrar)}>Mostrar?</button>
      <h3>Hola {nombre}</h3>
      <Saludo setNombre={setNombre} />
      <Hola nombre={nombre} count={count} />
      <Tarjeta nombre={nombre} count={count} puerto={PUERTO} />
    </>
  );
}

export default App;
