export default function Tarjeta({ puerto, count, nombre }) {
  return (
    <div>
      <h1>{nombre}</h1>
      <span>{count}</span>
      <p>{puerto}</p>
    </div>
  );
}
//
