import { useEffect } from "react";

const EventListenerExample = () => {
  useEffect(() => {
    const handleClick = () => {
      console.log("Click ejemplo 1");
    };

    // Agregar el event listener al montar el componente
    document.addEventListener("click", handleClick);

    // Remover el event listener al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // El array vacío como segundo argumento asegura que el efecto solo se ejecute al montar y desmontar

  return <div>Componente con Event Listener</div>;
};

export default EventListenerExample;
