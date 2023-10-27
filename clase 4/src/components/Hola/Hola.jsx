import { hola } from "./hola.module.css";
export default function Hola({ nombre, count }) {
  return (
    <>
      <span className={hola}>
        El usuario {nombre} cantidad de click {count}
      </span>
    </>
  );
}
