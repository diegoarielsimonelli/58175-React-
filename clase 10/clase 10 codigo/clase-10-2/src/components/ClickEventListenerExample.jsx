import { useEffect, useState } from "react";

const ClickEventListenerExample = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClickCount((prevCount) => prevCount + 1);
      console.log("click ejemplo 2");
    };

    // Agregar el event listener al montar el componente
    document.addEventListener("click", handleClick);

    // Remover el event listener al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // El array vacío como segundo argumento asegura que el efecto solo se ejecute al montar y desmontar

  return (
    <div>
      <p>Haz clic en cualquier parte del documento.</p>
      <p>Conteo de clics: {clickCount}</p>
    </div>
  );
};

export default ClickEventListenerExample;
