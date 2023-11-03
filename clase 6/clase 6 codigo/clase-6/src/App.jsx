import { useState } from "react";

import "./App.css";
import FormularioLogin from "./components/FormularioLogin";
import Formulario from "./components/Formulario";
import ListaInvitados from "./components/ListaInvitados";
import ListaInvitadosEditable from "./components/ListaInvitadosEditable";
import Promesas from "./components/Promesas";
import Promesas2 from "./components/Promesas2";
import Fetch from "./components/Fetch";
import Fetch2 from "./components/Fetch2";

function App() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <>
      {/*  Formularios */}

      {/* <Formulario /> */}

      {/* <h2>{autenticado ? "Autenticado" : "No Autenticado"}</h2> */}

      {/* <FormularioLogin autenticadoHook={(auth) => setAutenticado(auth)} /> */}

      {/* <FormularioLogin autenticadoHook={setAutenticado} /> */}

      {/* Promesas */}
      {/* <Promesas /> */}
      {/* <Promesas2 /> */}

      {/* {Map} */}
      {/* <ListaInvitados /> */}

      {/* <ListaInvitadosEditable /> */}

      {/* <Fetch /> */}
      {/* <Fetch2></Fetch2> */}
    </>
  );
}

export default App;
