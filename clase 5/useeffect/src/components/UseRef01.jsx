import { useRef, useEffect } from "react";

export default function UseRef01() {
  const valor = useRef(null);

  function handleFocus() {
    // Modificar el contenido del elemento con la referencia.
    valor.current.focus();
    valor.current.style.border = "1rem solid red";
    console.log(valor.current);
    console.log(valor.current.value);
  }
  useEffect(() => {
    // Establecer el enfoque en el input Después del renderizado.
    // valor.current.focus();
    // valor.current.style.border = "1rem solid red";
  }, []);

  return (
    <>
      {console.log(useRef())}
      <h1>useRef</h1>

      <input type='text' placeholder='Ingrese su nombre' ref={valor} />

      <button onClick={handleFocus}>Agregar</button>
    </>
  );
}
