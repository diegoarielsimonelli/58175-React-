import {
  Route,
  Routes,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import Home from "../componentes/Home";
import Contact from "../componentes/Contact";
import Products from "../componentes/Products";
import Navbar from "../componentes/Navbar";
import Error404 from "../componentes/Error404";

import Celulares from "../componentes/Celulares";
import Notebooks from "../componentes/Notebooks";
import SubRutas from "./SubRutas";
import Detalle from "../componentes/Detalle";

export default function RouterPrincipal() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/productos' element={<Products />} />

          <Route path='/productos' element={<SubRutas />}>
            <Route index element={<Products />} />
            <Route path='detalle/:id' element={<Detalle />} />
            <Route path='celulares' element={<Celulares />} />
            <Route path='notebooks' element={<Notebooks />} />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
