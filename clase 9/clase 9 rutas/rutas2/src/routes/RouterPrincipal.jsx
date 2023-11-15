import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import Home from "../views/Home";
import Componente1 from "../views/Componente1";
import Componente2 from "../views/Componente2";
import Error404 from "../views/Error404";
import RouterSubRutas from "./RouterSubRutas";

import SubRuta1 from "../views/subrutas/SubRuta1";
import SubRuta2 from "../views/subrutas/SubRuta2";
import InicioSubRuta from "../views/subrutas/InicioSubRuta";
import Persona from "../views/Persona";

export default function RouterPrincipal() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className='active'>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to='/componente1' className='active'>
              Componente 1
            </NavLink>
          </li>
          <li>
            <NavLink to='/componente2' className='active'>
              Componente 2
            </NavLink>
          </li>
          <li>
            <NavLink to='/subrutas' className='active'>
              SubRutas
            </NavLink>
          </li>
          <li>
            <NavLink to='/persona' className='active'>
              Persona
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/componente1' element={<Componente1 />} />
        <Route path='/componente2' element={<Componente2 />} />

        <Route path='/persona/:nombre/:apellido' element={<Persona />}></Route>
        <Route path='/persona/:nombre/' element={<Persona />}></Route>
        <Route path='/persona/' element={<Persona />}></Route>
        <Route
          path='/navegar'
          element={<Navigate to='/persona/TuNombre/TuApellido' />}
        ></Route>

        {/* Subrutas */}
        <Route path='/subrutas/*' element={<RouterSubRutas />}>
          <Route index element={<InicioSubRuta />}></Route>
          <Route path='inicio' element={<InicioSubRuta />}></Route>
          <Route path='subruta1' element={<SubRuta1 />}></Route>
          <Route path='subruta2' element={<SubRuta2 />}></Route>
        </Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
}
