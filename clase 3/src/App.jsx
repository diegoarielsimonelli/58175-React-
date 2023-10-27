import Saludo from "../src/components/Saludo";
import "./App.css";
import Hola from "./components/Hola";

function App() {
  return (
    <>
      <Hola name={null} />
      <Saludo nombre='Pedro' apellido='Simonelli' />
    </>
  );
}

export default App;
