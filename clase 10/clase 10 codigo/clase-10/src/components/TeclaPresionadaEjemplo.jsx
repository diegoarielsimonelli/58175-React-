import { useState } from "react";

const TeclaPresionadaEjemplo = () => {
  const [mensaje, setMensaje] = useState("");

  const handleKeyDown = (event) => {
    // event.preventDefault() puede usarse para prevenir acciones predeterminadas de teclas específicas
    if (event.key === "Enter") {
      event.preventDefault(); // Evita que se realice una nueva línea al presionar Enter
      setMensaje("¡Presionaste Enter!");
    }
  };

  return (
    <div>
      <textarea
        value={mensaje}
        placeholder='Presiona Enter para mostrar el mensaje'
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TeclaPresionadaEjemplo;
// En este ejemplo, el componente TeclaPresionadaEjemplo utiliza el evento onKeyDown en un área de texto.
//  Cuando el usuario presiona la tecla Enter, event.preventDefault() se utiliza para evitar
//  la acción predeterminada de agregar una nueva línea en el área de texto, y en su lugar,
// se establece un mensaje indicando que se presionó Enter.
