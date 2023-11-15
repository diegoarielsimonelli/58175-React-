import { Link } from "react-router-dom";
export default function Error404() {
  return (
    <>
      <h1>Error 404</h1>
      <p>Pagina no encontrada</p>
      <li>
        <Link to={"/"}>Ir al inicio</Link>
      </li>
    </>
  );
}
