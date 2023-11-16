import React, { useState } from "react";

export default function Input() {
  const [tecla, setTecla] = useState("");

  function handleChange(e) {
    setTecla(e.target.value);
  }
  function handleKeyDown(e) {
    const Key = /^[aeiouAEIOU]$/.test(e.key);
    if (Key) {
      e.preventDefault();
    }
  }

  return (
    <input
      type='text'
      placeholder='no ingrese vocales'
      name='tecla'
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={tecla}
    />
  );
}
