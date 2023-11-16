import { useState } from "react";

const FormularioEjemplo = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    alert(`Texto ingresado: ${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingrese un texto:
        <input type='text' value={inputValue} onChange={handleChange} />
      </label>
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default FormularioEjemplo;
// En este ejemplo, cuando el usuario intenta enviar el formulario, event.preventDefault()
// se utiliza en la función handleSubmit para evitar que el formulario se envíe de la manera tradicional.
//  Luego, se muestra una alerta con el texto ingresado en el campo de entrada.
