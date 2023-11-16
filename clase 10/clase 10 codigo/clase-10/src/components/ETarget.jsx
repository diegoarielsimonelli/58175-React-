const ETarget = () => {
  const handleClick = (event) => {
    alert(`Clic en el contenedor: ${event.currentTarget.tagName}`);
  };

  return (
    <div onClick={handleClick}>
      <button>Botón dentro del contenedor</button>
    </div>
  );
};

export default ETarget;
// al hacer clic en el botón dentro del contenedor, la función handleClick se ejecutará,
//  y event.currentTarget se utilizará para obtener el nombre de la etiqueta del contenedor.
