// Componente que muestra la lista de elementos
export default function ListaItems({ items }) {
  return (
    <div>
      <h2>Lista de Items</h2>
      <ul style={{ listStyle: "none" }}>
        {items.map((item, index) => (
          <li key={index}>
            {item.nombre} - {item.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
}
