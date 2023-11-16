// Componente reutilizable que representa una tarjeta con título y contenido
const Card = ({ titulo, contenido }) => (
  <div
    style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px",
    }}
  >
    <h2>{titulo}</h2>
    <p>{contenido}</p>
  </div>
);

// Ejemplo de uso del componente Card en diferentes partes de la aplicación
const Reutilizable = () => (
  <div>
    <Card titulo='Noticia' contenido='Nueva actualización disponible' />
    <Card titulo='Evento' contenido='Conferencia el próximo jueves' />
    <Card titulo='Oferta' contenido='Descuentos especiales esta semana' />
  </div>
);

export default Reutilizable;
