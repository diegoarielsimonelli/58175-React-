const EjemploTargets = () => {
  const handleClick = (event) => {
    // event.currentTarget se refiere al elemento al que se le adjuntó el manejador de eventos
    alert(`Clic en el Contenedor: ${event.currentTarget.tagName}`);

    // event.target se refiere al elemento que originó el evento

    alert(`Clic en el elemento específico: ${event.target.tagName}`);
  };

  return (
    <div onClick={handleClick}>
      <h1>Titulo y Contenedor</h1>
      <p>¡Haz clic en este párrafo!</p>
    </div>
  );
};

export default EjemploTargets;
// En este ejemplo, el componente EventosEjemplo tiene un div que contiene un encabezado (<h1>)
//     y un párrafo (<p>). Cuando haces clic en cualquier parte del div,
//         se ejecuta la función handleClick. Dentro de esta función,
//         event.currentTarget se utiliza para obtener el nombre de la etiqueta del contenedor (div),
//         y event.target se utiliza para obtener el texto específico del elemento en el que se hizo clic (<p>).

// Cuando ejecutes este componente y hagas clic en el contenedor,
// verás dos alertas: una mostrando "Clic en el contenedor: DIV" y
//  la otra mostrando "Clic en el elemento específico: ¡Haz clic en este párrafo!".
//  Estas alertas ilustran el uso de event.currentTarget y event.target en un mismo componente funcional.
