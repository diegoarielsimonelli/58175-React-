const Target = () => {
  const handleClick = (event) => {
    alert(`Hiciste clic en el botón: ${event.target.innerText}`);
  };

  return (
    <div onClick={handleClick}>
      <button>Botón 1</button>
      <button>Botón 2</button>
    </div>
  );
};

export default Target;
// al hacer clic en cualquiera de los botones, la función handleClick se ejecutará,
// y event.target se utilizará para obtener el texto del botón específico en el que se hizo clic.
