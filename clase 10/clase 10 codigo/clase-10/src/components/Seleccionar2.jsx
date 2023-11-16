import { useState } from "react";

function Select({ options, onSelect, selectedOption }) {
  return options.map((o) => (
    <div key={o.value}>
      <input
        type='radio'
        name='color'
        id={o.value}
        checked={selectedOption === o.value}
        onChange={() => {
          onSelect(o.value);
        }}
      />
      <label htmlFor={o.value}>{o.text}</label>
    </div>
  ));
}

export default function Seleccionar2() {
  const [selectedOption, setSelectedOption] = useState(1);
  const options = [
    { value: 1, text: "Azul" },
    { value: 2, text: "Rojo" },
    { value: 3, text: "Negro" },
    { value: 4, text: "Blanco" },
  ];

  function optionSelected(value) {
    setSelectedOption(value);
  }

  return (
    <>
      <Select
        options={options}
        onSelect={optionSelected}
        selectedOption={selectedOption}
      />
      <p>Seleccionado: {selectedOption}</p>
    </>
  );
}
