import { useState } from "react";
import ListaItems from "./ListaItems";
import AgregarItem from "./AgregarItem";

export default function Padre() {
  const [items, setItems] = useState([
    { nombre: "Tarea 1", descripcion: "Descripción Tarea 1" },
    { nombre: "Tarea 2", descripcion: "Descripción Tarea 2" },
  ]);

  const agregarItem = (nuevoItem) => {
    setItems([...items, nuevoItem]);
  };
  return (
    <>
      <h1> Elevando Estado</h1>
      <ListaItems items={items} />
      <AgregarItem onAgregarItem={agregarItem} />
    </>
  );
}
