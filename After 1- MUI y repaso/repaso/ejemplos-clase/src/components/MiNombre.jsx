const MiNombre = (props) => {
  const variable_jsx = "Este es mi nombre: ";
  return (
    <h1>
      {variable_jsx} {props.nombre} {props.children}
    </h1>
  );
};

export default MiNombre;
