import "./App.css";
import {
  ListaInvitados,
  ListaInvitadosEditable,
  MiNombre,
  MiTarjeta,
  EjemploImagenes,
  FechaContador,
  RenderCondicional,
} from "./components";
import { LikesUseState, Likes } from "./components/Likes";
function App() {
  return (
    <>
      {/* 1. Pasaje de propiedades a componente */}
      {/* <MiNombre nombre='Diego'>
        <span>soy un children</span>
      </MiNombre> */}

      {/* 2. Propiedad children a componente */}
      {/* <MiTarjeta nombre='Diego'>
        <p>
          Este es un elemento HIJO que se pasará al componente{" "}
          <strong>MiTarjeta</strong>como props.children para su uso
        </p>
        <p>esto es children</p>
      </MiTarjeta> */}

      {/* 3. Ejemplo de uso de imagenes */}
      {/* <EjemploImagenes /> */}

      {/* 4. Problema de renderizado */}
      {/* <Likes number={0} /> */}

      {/* 5. Solución con useState */}
      {/* <LikesUseState number={0} /> */}

      {/* 6. Otro ejemplo de uso */}
      {/* <FechaContador /> */}

      {/* 7. Renderizado condicional */}
      {/* <RenderCondicional /> */}

      {/* 8. Mapeo de datos con map() */}
      {/* <ListaInvitados /> */}

      {/* 9. Manipular un array con useState */}
      <ListaInvitadosEditable />
    </>
  );
}

export default App;
