import { NavLink, Outlet } from "react-router-dom";

export default function SubRuta() {
  return (
    <>
      <nav>
        <ol style={{ listStyle: "none" }}>
          <li>
            <NavLink to={"celulares"}>Celulares</NavLink>
          </li>
          <li>
            <NavLink to={"notebooks"}>Notebooks</NavLink>
          </li>
        </ol>
      </nav>
      <Outlet />
    </>
  );
}
