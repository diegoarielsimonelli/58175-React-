import { useState } from "react";

function Select({ options, onSelect, defaultOptions }) {
  return (
    <select name='' id='' onChange={(e) => onSelect(e.target.value)}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.text}
        </option>
      ))}
    </select>
  );
}

export default function Seleccionar() {
  const [option, setOption] = useState(1);
  const options = [
    { value: 1, text: "Azul" },
    { value: 2, text: "Rojo" },
    { value: 3, text: "Negro" },
    { value: 4, text: "Blanco" },
  ];
  function optionSelected(value) {
    setOption(value);
  }
  return (
    <>
      <Select
        name=''
        id=''
        options={options}
        onSelect={optionSelected}
        defaultOptions={1}
      ></Select>
      <p>Seleccionado: {option}</p>
    </>
  );
}
