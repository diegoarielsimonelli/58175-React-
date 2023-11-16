import { useState } from "react";

const ElevarEstado = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Elevar Estado</h2>
      <Hijo contador={contador} onIncrementar={incrementarContador} />
    </div>
  );
};
const Boton = ({ etiqueta, onClick }) => (
  <button onClick={onClick}>{etiqueta}</button>
);

const Hijo = ({ contador, onIncrementar }) => (
  <div>
    <p>Contador: {contador}</p>
    <Boton etiqueta='Incrementar' onClick={onIncrementar} />
  </div>
);
export default ElevarEstado;
