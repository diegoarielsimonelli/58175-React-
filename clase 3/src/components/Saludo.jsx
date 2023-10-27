import { pepe, pepe2 } from "./saludo.module.css";
export default function Saludo({ nombre, apellido }) {
  return (
    <div className={pepe}>
      <h1 className={pepe2}>Saludo {nombre + " " + apellido}</h1>
    </div>
  );
}
