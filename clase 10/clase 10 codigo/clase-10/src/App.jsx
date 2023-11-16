import "./App.css";

import {
  Generacion,
  Captura,
  EventoNativo,
  ETarget,
  Target,
  EjemploTargets,
  FormularioEjemplo,
  TeclaPresionadaEjemplo,
  InputSinVocales,
  Seleccionar2,
  Seleccionar,
  Padre,
  ElevarEstado,
  Reutilizable,
  Boton,
  Context,
  Mensaje,
  EventosPersonalizados2,
  EventosPersonalizados1,
} from "./components";
import ComponentePadre from "./components/propagacion";
function App() {
  return (
    <>
      <h2>Eventos</h2>
      {/* Evento Nativo vs SyntheticEvent */}
      {/* <EventoNativo /> */}

      {/* Generación de Eventos */}
      {/* <Generacion /> */}

      {/* Captura de Eventos */}
      {/* <Captura /> */}

      {/* Propagación de Eventos */}
      {/* <ComponentePadre /> */}

      {/* event.currentTarget vs event.target */}
      {/* <Target /> */}
      {/* <ETarget /> */}

      {/* event.currentTarget + event.target */}
      {/* <EjemploTargets /> */}

      {/* event.preventDefault() */}

      {/* <FormularioEjemplo /> */}
      {/* <TeclaPresionadaEjemplo /> */}

      {/* Actividad */}
      {/* <InputSinVocales /> */}

      {/* Eventos Personalizados */}
      {/* <EventosPersonalizados1 />
      <EventosPersonalizados2 /> */}

      {/* Unidireccionalidad y eventos. Enviar datos al padre */}
      {/* <Padre /> */}

      {/* "intercambiabilidad" o "agnostic behavior" */}
      {/* <Mensaje /> */}
      {/* <Boton /> */}
      {/* <Context /> */}

      {/* Abstraccion */}
      {/* <Reutilizable /> */}
      {/* 
      <ElevarEstado /> */}
      <Seleccionar />
      <Seleccionar2 />
    </>
  );
}

export default App;
