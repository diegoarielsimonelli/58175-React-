const MiTarjeta = ({ nombre, children }) => {
  // En este caso se crea un contenedor principal
  // "div" dado que JSX espera que siempre retornemos
  // un elemento padre que agrupe a todos
  // podría utilizarse <> .... </> en vez de div
  // dado que no estamos aprovechando ninguna propiedad de div
  console.log({ children });
  return (
    <div>
      <h2>Tarjeta: {nombre}</h2>
      {children}
    </div>
  );
};

export default MiTarjeta;
