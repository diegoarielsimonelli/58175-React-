import { NavLink, Outlet } from "react-router-dom";

export default function SubRutas() {
  return (
    <>
      <nav>
        <ol>
          <li>
            {" "}
            <NavLink to={"/productos"}>Productos</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"celulares"}>Celulares</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"notebooks"}>Productos</NavLink>
          </li>
        </ol>
      </nav>
      <Outlet />
    </>
  );
}
