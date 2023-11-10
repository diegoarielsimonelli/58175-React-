import { useState } from "react";

// Componente Counter que proporciona la funcionalidad del contador a través de Render Props
function Counter({ count, increment, decrement }) {
  return (
    <div>
      <div>Contador: {count}</div>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default function RenderPropsCount2() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
}
