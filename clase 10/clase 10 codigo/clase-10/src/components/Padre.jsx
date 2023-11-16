import { useState } from "react";

// Componente Hijo que permite al usuario escribir un mensaje
const Hijo = ({ onEnviarMensaje }) => {
  const [mensaje, setMensaje] = useState("");

  const handleInputChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleClick = () => {
    // Enviar el mensaje al componente Padre mediante la función onEnviarMensaje
    onEnviarMensaje(mensaje);
    // Limpiar el input después de enviar el mensaje
    setMensaje("");
  };

  return (
    <div>
      <input type='text' value={mensaje} onChange={handleInputChange} />
      <button onClick={handleClick}>Enviar Mensaje</button>
    </div>
  );
};

// Componente Padre que recibe y muestra el mensaje enviado por el componente Hijo
const Padre = () => {
  const [mensajeRecibido, setMensajeRecibido] = useState("");

  // Función que se ejecutará cuando el componente Hijo envíe un mensaje
  const manejarMensajeEnviado = (mensaje) => {
    setMensajeRecibido(mensaje);
  };

  return (
    <div>
      <p>Mensaje Recibido: {mensajeRecibido}</p>
      {/* Paso de la función manejarMensajeEnviado como prop al componente Hijo */}
      <Hijo onEnviarMensaje={manejarMensajeEnviado} />
    </div>
  );
};

export default Padre;
