const EventoPersonalizado2 = () => {
  const handleMiEvento = (event) => {
    console.log("Dato recibido:", event.detail);
  };

  document.addEventListener("miEvento", handleMiEvento);

  return <p>Esperando evento...</p>;
};

export default EventoPersonalizado2;
