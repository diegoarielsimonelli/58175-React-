import { useState } from "react";

// Componente funcional que muestra un botón
const Boton2 = ({ etiqueta, onClick }) => (
  <button onClick={onClick}>{etiqueta}</button>
);

// Componente principal que utiliza el componente Boton
const Boton = () => {
  const [mensaje, setMensaje] = useState("¡Hola mundo otra vez!");

  // Función que cambia el mensaje
  const cambiarMensaje = () => {
    setMensaje("Mensaje cambiado");
  };

  return (
    <div>
      <p>{mensaje}</p>
      {/* Proporcionamos la función cambiarMensaje como prop al componente Boton */}
      <Boton2 etiqueta='Cambiar Mensaje' onClick={cambiarMensaje} />
    </div>
  );
};

export default Boton;
// el componente Boton2 recibe una función (onClick) como prop y la ejecuta cuando el botón se hace clic.
//  El componente principal (Boton) proporciona la implementación específica de la función (cambiarMensaje)
//  como una prop al componente Boton.
//Esto hace que el componente Boton sea independiente de la lógica específica
//   de la aplicación y, por lo tanto, intercambiable.
//   Puedes utilizar el mismo componente Boton en diferentes contextos proporcionando diferentes funciones onClick como props.
