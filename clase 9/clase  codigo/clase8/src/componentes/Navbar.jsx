import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <ol>
          <li>
            <NavLink to={"/"} className='activa'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contacto"} className='activa'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/productos"} className='activa'>
              Products
            </NavLink>
          </li>
        </ol>
      </nav>
    </>
  );
}
