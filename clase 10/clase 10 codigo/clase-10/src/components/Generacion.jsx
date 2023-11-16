const BotonClick = () => {
  const handleClick = () => {
    alert("¡Hiciste clic en el botón!");
  };

  return <button onClick={handleClick}>Haz clic aquí</button>;
};

export default BotonClick;
//   el componente BotonClick tiene un botón,
//   y cuando el usuario hace clic en él, se ejecuta la función handleClick,
//   que muestra una alerta.
//    Aquí, onClick es un ejemplo de generación de eventos.
