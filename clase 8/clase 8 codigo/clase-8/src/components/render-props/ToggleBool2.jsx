import { useState } from "react";

// Componente Toggle que gestiona el estado del botón
function Toggle({ on, toggle }) {
  return <button onClick={toggle}>{on ? "Encendido" : "Apagado"}</button>;
}

// Componente que utiliza la funcionalidad de Toggle
function ToggleButton({ on, toggle }) {
  return <Toggle on={on} toggle={toggle} />;
}

// Otro componente que utiliza la funcionalidad de Toggle
function ToggleDisplay({ on }) {
  return <div>El estado del botón es: {on ? "Encendido" : "Apagado"}</div>;
}

export default function Bool() {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };

  return (
    <div>
      <h2>ToggleBool2</h2>
      <ToggleButton on={on} toggle={toggle} />
      <ToggleDisplay on={on} />
    </div>
  );
}
