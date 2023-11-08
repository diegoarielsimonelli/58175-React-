import "./App.css";

import AxiosGet from "./components/AxiosGet";
import AxiosGet2 from "./components/AxiosGet2";
import AxiosPost from "./components/AxiosPost";
import FetchGet from "./components/FetchGet";
import RouterPrincipal from "./routes/RouterPrincipal";

function App() {
  return (
    <div className='App'>
      {/* Crear una petición con Fetch */}
      {/* <FetchGet /> */}
      {/* 1 - Ejemplo con Axios y petición GET */}
      {/* <AxiosGet /> */}
      {/* <AxiosGet2 /> */}
      {/* 2 - Ejemplo con Axios y petición POST */}
      {/* <AxiosPost /> */}

      {/* 3 y 4 - Ejemplo de la página de posteos con AXIOS + backend */}
      <RouterPrincipal />
    </div>
  );
}

export default App;
