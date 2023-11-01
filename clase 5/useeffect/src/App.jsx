import { useState } from "react";
import Animation from "./components/animations/ExampleAnimation";
import {
  Padre1,
  Padre2,
  Padre3,
  FormularioLogin,
  FormularioUseRef,
  MiNombre,
  Actividad,
  UseRef01,
  UseRef02,
  IntervalComponent,
  MiTarjeta,
  UseEffect03,
  UseEffect00,
  UseEffect01,
  UseEffect02,
} from "./components/";
import "./App.css";

function App() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <>
      {/* 1. Pasaje de información Padre a Hijo - Anidamiento basico*/}
      {/* <Padre1 /> */}

      {/* 2. Pasaje de información Hijo a Padre */}
      {/*  El padre le pasa una prop al hijo y con evento vuelve al padre */}
      {/* <Padre2 /> */}

      {/* <Padre3 /> */}

      {/* 3. Formularios */}
      {/* <h2>{autenticado ? "Autenticado" : "No Autenticado"}</h2>
      <FormularioLogin autenticadoHook={(auth) => setAutenticado(auth)} /> */}

      {/* 4. UseEffect */}
      {/* <UseEffect00 /> */}

      {/* 5. UseEffect y usestate */}
      {/* <UseEffect01 /> */}

      {/* 6. UseEffect para monitorear una variable */}
      {/* <UseEffect02 /> */}

      {/* 7. UseEffect ejemplo integrador */}
      {/* <UseEffect03 /> */}

      {/* 8. UseEffect desmontar */}
      {/* <IntervalComponent /> */}

      {/* 9. Children */}
      {/* <MiNombre nombre='Bruno!!!' /> */}
      <MiNombre nombre={<MiTarjeta nombre='diego' />}>
        <span>soy un children</span>
        <Animation />
      </MiNombre>

      {/* <MiTarjeta nombre='Diego'>
        <p>
          Este es un elemento HIJO que se pasará al componente{" "}
          <strong>MiTarjeta</strong>como props.children para su uso
        </p>
        <p>esto es children</p>
      </MiTarjeta> */}

      {/* 10.useRef */}
      {/* <UseRef01 /> */}

      {/* <UseRef02 /> */}

      {/* 11.Formulario con useRef */}
      {/* <FormularioUseRef /> */}

      {/* 12.Extra - Animaciones con CSS*/}
      {/* <Animation /> */}

      {/* Actividad */}
      {/* <Actividad /> */}
    </>
  );
}

export default App;
