import { useState } from "react";

// Componente Toggle que gestiona el estado del botón
function Toggle({ children }) {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };

  return children({ on, toggle });
}

// Componente que utiliza la funcionalidad de Toggle
function ToggleButton() {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <button onClick={toggle}>{on ? "Encendido" : "Apagado"}</button>
      )}
    </Toggle>
  );
}

// Otro componente que utiliza la funcionalidad de Toggle
function ToggleDisplay() {
  return (
    <Toggle>
      {({ on }) => (
        <div>El estado del botón es: {on ? "Encendido" : "Apagado"}</div>
      )}
    </Toggle>
  );
}

export default function Bool() {
  return (
    <div>
      <h2>ToggleBool</h2>
      <ToggleButton />
      <ToggleDisplay />
    </div>
  );
}
