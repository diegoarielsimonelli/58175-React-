import { useState } from "react";

const EventosPersonalizados1 = () => {
  const [dato, setDato] = useState("");

  const handleChange = (event) => {
    setDato(event.target.value);
  };

  const handleClick = () => {
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

export default EventosPersonalizados1;
