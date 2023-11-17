import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";
import Contact from "../views/Contact";
import AboutUs from "../views/AboutUs";
import SubRuta from "./SubRuta";
import Celulares from "../views/Celulares";
import Notebooks from "../views/Notebooks";
export default function RoutaPrincipal() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route Route path='/productos' element={<SubRuta />}>
          {/* Con index configuro la ruta por defecto de las subrutas */}
          <Route index element={<Celulares />} />
          <Route path='celulares' element={<Celulares />} />
          <Route path='notebooks' element={<Notebooks />} />
        </Route>
      </Routes>
    </Router>
  );
}
