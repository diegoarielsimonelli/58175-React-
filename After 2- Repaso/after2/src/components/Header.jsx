import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "red",
      }}
    >
      <ol style={{ listStyle: "none" }}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/contacto"}>Contacto</NavLink>
        </li>
        <li>
          <NavLink to={"/about-us"}>Nosotros</NavLink>
        </li>
        <li>
          <NavLink to={"/productos"}>Productos</NavLink>
        </li>
      </ol>
    </nav>
  );
}
