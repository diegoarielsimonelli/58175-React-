import { useState } from "react";

import icoDisponible from "../assets/images/disponible.png";
import icoVendido from "../assets/images/vendido.png";

const RenderCondicional = () => {
  const [disponible, setDisponible] = useState(true);

  const cartelDisponible = (
    <div>
      <img src={icoDisponible} height='200px' alt='Foto' />
    </div>
  );
  const cartelVendido = (
    <div>
      <img src={icoVendido} height='200px' alt='Foto' />
    </div>
  );

  return (
    <div>
      <button
        onClick={() => {
          setDisponible(!disponible);
        }}
      >
        Cambiar estado
      </button>
      {disponible ? cartelDisponible : cartelVendido}
    </div>
  );
};
export default RenderCondicional;
