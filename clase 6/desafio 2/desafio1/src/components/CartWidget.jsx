import carrito from "../assets/carrito.png";
export default function CartWidget({ cantidad }) {
  return (
    <div>
      <img src={carrito} alt='carrito' style={{ width: 30, height: 30 }} />
      <span style={{ margin: 9 }}>{cantidad}</span>
    </div>
  );
}
