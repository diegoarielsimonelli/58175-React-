import { useState } from "react";
export default function ItemCount({ initial, stock, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  function increment() {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <>
      <h2>Cantidad {quantity}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={() => onAdd(quantity)} disabled={!stock}>
        Agregar al Carrito
      </button>
    </>
  );
}
