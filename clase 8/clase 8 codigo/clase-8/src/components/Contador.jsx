import { useContador } from "../hooks/useContador";

export default function Contador() {
  // Utiliza el custom hook useContador
  const { contador, incrementar, decrementar, resetear } = useContador(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar} disabled={contador === 0}>
        Decrementar
      </button>
      <button onClick={resetear}>Resetear</button>
    </div>
  );
}
