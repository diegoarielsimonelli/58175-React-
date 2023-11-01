const MiNombre = (props) => {
  const variable_jsx = "Este es mi nombre: ";
  console.log(props.children);
  return (
    <>
      <span>{variable_jsx}</span>
      <h2>{props.nombre}</h2>
      <h3>{props.children}</h3>
    </>
  );
};

export default MiNombre;
