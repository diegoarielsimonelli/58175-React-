import { useState } from "react";

// Componente Counter que proporciona el estado y funcionalidad del contador a través de Render Props
function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return children(count, increment, decrement);
}

// Componente que utiliza la funcionalidad de Counter
function CounterDisplay() {
  return <Counter>{(count) => <div>Contador: {count}</div>}</Counter>;
}

// Otro componente que utiliza la funcionalidad de Counter
function CounterControls() {
  return (
    <Counter>
      {(count, increment, decrement) => (
        <div>
          <button onClick={increment}>Incrementar</button>
          <button onClick={decrement}>Decrementar</button>
        </div>
      )}
    </Counter>
  );
}

export default function RenderPropsCount() {
  return (
    <div>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
}
