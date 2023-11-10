function Caja({ children }) {
  return (
    <div>
      <h2>Este es Mi Componente Caja</h2>
      <div style={{ color: "yellow" }}>{children}</div>
    </div>
  );
}

export default function Container() {
  return (
    <>
      <h2>Contenedor</h2>
      <Caja>
        <p>Este párrafo está dentro de Children.</p>
        <button onClick={() => alert("Estoy dentro de Children")}>
          Haz clic en acá
        </button>
      </Caja>
    </>
  );
}
