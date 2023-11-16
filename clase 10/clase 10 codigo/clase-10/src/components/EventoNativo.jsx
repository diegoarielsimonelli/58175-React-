import { useState } from "react";

export default function EventoNativo() {
  const [count, setCount] = useState(0);
  function handleClick(e) {
    // console.log("evento sintetico", e);
    // console.log("evento nativo", e.nativeEvent);
    // console.log("elemento que disparo el evento", e.target);
    // console.log("elemento que disparo el evento nativo", e.nativeEvent.target);
    // console.log("numero de fase", e.eventPhase);
    setCount(count + 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
}
