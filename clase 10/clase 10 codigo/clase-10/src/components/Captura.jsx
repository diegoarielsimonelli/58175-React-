const CampoTexto = () => {
  const handleChange = (event) => {
    console.log("Texto cambiado:", event.target.value);
  };

  return (
    <input type='text' onChange={handleChange} placeholder='Escribe algo' />
  );
};

export default CampoTexto;
// el componente CampoTexto tiene un campo de texto,
// y cada vez que el usuario escribe algo, se ejecuta la función handleChange,
// que imprime el texto en la consola.
//  Aquí, onChange es un ejemplo de captura de eventos.
