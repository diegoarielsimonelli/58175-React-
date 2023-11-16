import { useState } from "react";

const MiComponente = () => {
  const [dato, setDato] = useState("");

  const handleChange = (event) => {
    setDato(event.target.value);
  };

  const handleClick = () => {
    // Disparar el evento personalizado 'miEvento' con el dato actual
    const eventoPersonalizado = new CustomEvent("miEvento", { detail: dato });
    document.dispatchEvent(eventoPersonalizado);
  };

  return (
    <div>
      <input type='text' value={dato} onChange={handleChange} />
      <button onClick={handleClick}>Disparar Evento</button>
    </div>
  );
};

const OtroComponente = () => {
  const handleMiEvento = (event) => {
    console.log("Dato recibido:", event.detail);
  };

  // Agregar el event listener para el evento personalizado 'miEvento'
  document.addEventListener("miEvento", handleMiEvento);

  return <p>Esperando evento...</p>;
};

export { MiComponente, OtroComponente };
// MiComponente tiene un input y un botón.
// Cuando haces clic en el botón, se dispara un evento personalizado
//  llamado 'miEvento' con el valor actual del input como detalle.
//  El componente OtroComponente escucha este evento
// y muestra el dato recibido en la consola.
