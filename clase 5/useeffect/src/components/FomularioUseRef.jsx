import { useRef } from "react";

function FormularioUseRef() {
  // Usamos useRef para crear una referencia al campo de entrada de texto
  const inputRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Usamos .current para acceder al valor actual del campo de entrada
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    console.log(inputRef);
    // Muestra una alerta con el valor del campo de entrada
    alert(`El valor ingresado es: ${inputValue}`);

    // Limpia el campo de entrada
    inputRef.current.value = "";
  };

  return (
    <div>
      <h2>Ejemplo de Formulario con useRef</h2>
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "grid", gap: 25, padding: 5 }}
      >
        <div>
          <label htmlFor='campo'>Campo de Texto: </label>
          {/* Asignamos la referencia a la propiedad ref del campo de entrada */}
          <input type='text' id='campo' ref={inputRef} />
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default FormularioUseRef;
// En este ejemplo, hemos creado una referencia llamada inputRef utilizando useRef(), y luego la asignamos al campo de entrada de texto utilizando la propiedad ref del campo de entrada. Cuando se envía el formulario, handleFormSubmit se llama y obtiene el valor actual del campo de entrada utilizando inputRef.current.value.
// Luego, muestra un mensaje de alerta con el valor y, opcionalmente, limpia el campo de entrada para que esté listo para el siguiente uso.
