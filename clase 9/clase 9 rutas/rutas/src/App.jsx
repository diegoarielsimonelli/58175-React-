import { useState } from "react";
import "./App.css";
import {
  RouterBasico,
  RouterAuth,
  RouterParams,
  RouterAnidados,
  RouterAnidadosOutlet,
} from "./routes";

function App() {
  const [autenticado, setAutenticado] = useState(true);
  return (
    <>
      {/* 1. Router básico con una barra navegacion */}
      {/* <RouterBasico /> */}

      {/* 2. Router con control de autenticación */}
      {/* <RouterAuth autenticado={autenticado} /> */}

      {/* 3. Rutas con parámetros con useParams */}
      {/* <RouterParams /> */}

      {/* 4. Rutas anidadas (subrutas) */}
      {/* <RouterAnidados /> */}

      {/* 5. Rutas anidadas (subrutas) */}
      <RouterAnidadosOutlet />
    </>
  );
}

export default App;
