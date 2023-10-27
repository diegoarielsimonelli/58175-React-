import icoDisponible from "../assets/images/disponible.png";
import icoVendido from "../assets/images/vendido.png";

const EjemploImagenes = () => {
  // En este caso se crea un contenedor principal
  // "div" dado que JSX espera que siempre retornemos
  // un elemento padre que agrupe a todos
  // podría utilizarse <> .... </> en vez de div
  // dado que no estamos aprovechando ninguna propiedad de div

  return (
    <div>
      <h2>Imagenes:</h2>
      <ul style={{ listStyle: "none" }}>
        <li>
          <img src={icoDisponible} height='150px' />
        </li>
        <li>
          <img src={icoVendido} height='150px' />
        </li>
      </ul>
    </div>
  );
};
export default EjemploImagenes;
