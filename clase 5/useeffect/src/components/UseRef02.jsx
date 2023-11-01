import { useEffect, useState, useRef } from "react";

export default function UseRef02() {
  const [mensaje, setMensaje] = useState("");
  const prevMensaje = useRef("");
  useEffect(() => {
    prevMensaje.current = mensaje;
  }, [mensaje]);

  function modificarMensaje(e) {
    setMensaje(e.target.value);
  }
  return (
    <>
      <input
        type='text'
        onChange={modificarMensaje}
        placeholder='Ingrese un mensaje'
      />
      <div>
        <p>Mensaje: {mensaje}</p>
        <p>Mensaje Previo: {prevMensaje.current}</p>
      </div>
    </>
  );
}
