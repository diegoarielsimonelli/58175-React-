import { useEffect, useState } from "react";

export default function Fetch2() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((r) => r.json())
      .then(({ results }) => setArray(results));
  }, []);

  return (
    <>
      <h1>Fetch2</h1>

      <div>
        {array.map((p) => (
          <div key={p.id}>
            <span>{p.name}</span>
            <img src={p.image} alt={p.name} />
          </div>
        ))}
      </div>
    </>
  );
}
