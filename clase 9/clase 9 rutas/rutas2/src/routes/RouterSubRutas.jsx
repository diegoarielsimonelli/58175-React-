import { NavLink, Outlet } from "react-router-dom";

export default function RouterSubRutas() {
  return (
    <>
      <h1>Navegación de las SubRutas</h1>
      <nav>
        <li>
          <NavLink to='inicio'>InicioSubRuta</NavLink>
        </li>
        <li>
          <NavLink to='subruta1'>SubRuta 1</NavLink>
        </li>
        <li>
          <NavLink to='subruta2'>SubRuta 2</NavLink>
        </li>
      </nav>

      <Outlet />
    </>
  );
}
