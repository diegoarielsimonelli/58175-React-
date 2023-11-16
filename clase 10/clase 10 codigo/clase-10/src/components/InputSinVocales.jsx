import { useState } from "react";

const InputSinVocales = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    // Verificar si la tecla presionada es una vocal (mayúscula o minúscula)
    const esVocal = /^[aeiouAEIOU]$/.test(event.key);

    // Si es una vocal, prevenir la acción predeterminada
    if (esVocal) {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        Input sin vocales:
        <input
          type='text'
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default InputSinVocales;
// el componente InputSinVocales tiene un input de texto que llama a la función handleKeyDown en el evento onKeyDown. Esta función verifica si la tecla presionada es una vocal utilizando una expresión regular (/^[aeiouAEIOU]$/).
// Si es una vocal, se utiliza event.preventDefault() para cancelar la acción predeterminada,
// evitando así que se ingrese la vocal en el input. La función handleChange maneja la actualización del estado
// cuando el valor del input cambia.

// Este enfoque garantiza que el input de texto no permita la entrada de vocales.
