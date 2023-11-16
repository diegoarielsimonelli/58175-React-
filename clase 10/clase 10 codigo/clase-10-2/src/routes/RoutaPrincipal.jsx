import {
  Routes,
  Route,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import EventListenerExample from "../components/EventListenerExample";
import ClickEventListenerExample from "../components/ClickEventListenerExample";

export default function RoutaPrincipal() {
  return (
    <div>
      <Router>
        <nav>
          <ol>
            <li>
              <NavLink to={"/"}>Ejemplo1</NavLink>
            </li>
            <li>
              <NavLink to={"/click"}>Ejemplo2</NavLink>
            </li>
          </ol>
        </nav>
        <Routes>
          <Route path='/' element={<EventListenerExample />} />
          <Route path='/click' element={<ClickEventListenerExample />} />
        </Routes>
      </Router>
    </div>
  );
}
