const ComponentePadre = () => {
  const handlePadreClick = () => {
    alert("¡Clic en el componente padre!");
  };

  return (
    <div onClick={handlePadreClick}>
      <h1>Componente Padre</h1>
      <ComponenteHijo />
    </div>
  );
};

const ComponenteHijo = () => {
  const handleHijoClick = (event) => {
    // Evita la propagación del evento al componente padre
    event.stopPropagation();
    alert("¡Clic en el componente hijo!");
  };

  return (
    <div onClick={handleHijoClick}>
      <h2>Componente Hijo</h2>
    </div>
  );
};

export default ComponentePadre;
// el componente ComponentePadre tiene un evento de clic,
// y también contiene un componente hijo llamado ComponenteHijo con su propio evento de clic.
// Al hacer clic en el componente hijo, se ejecutará la función handleHijoClick,
// pero la llamada a event.stopPropagation() evita que el evento se propague al componente padre.
// Esto ilustra la propagación de eventos en la jerarquía de componente.
