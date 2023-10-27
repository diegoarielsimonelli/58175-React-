import { hola } from "./saludo.module.css";
export default function Saludo({ setNombre }) {
  return (
    <button onClick={() => setNombre("Carlos")} className={hola}>
      {" "}
      Cambiar nombre
    </button>
  );
}
