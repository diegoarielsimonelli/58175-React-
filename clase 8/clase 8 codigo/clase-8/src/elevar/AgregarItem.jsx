// Componente que permite agregar nuevos elementos

import { useState } from "react";

export default function AgregarItem({ onAgregarItem }) {
  const [nuevoItem, setNuevoItem] = useState({ nombre: "", descripcion: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoItem({ ...nuevoItem, [name]: value });
  };

  const handleSubmit = () => {
    onAgregarItem(nuevoItem);
    setNuevoItem({ nombre: "", descripcion: "" });
  };

  return (
    <div>
      <h2>Agregar Nuevo Item</h2>
      <input
        type='text'
        name='nombre'
        value={nuevoItem.nombre}
        onChange={handleInputChange}
        placeholder='Nombre Tarea'
      />
      <input
        type='text'
        name='descripcion'
        value={nuevoItem.descripcion}
        onChange={handleInputChange}
        placeholder='Descripción'
      />
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  );
}
