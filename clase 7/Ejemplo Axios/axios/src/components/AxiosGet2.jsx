import { useState, useEffect } from "react";
import axios from "axios";

export default function AxiosGet2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => setData(response.data.abilities)); // Desestructurar data de la respuesta
  }, []);

  return (
    <div style={{ color: "white" }}>
      <h1>FetchGet</h1>
      <ol>
        {data.map(({ ability }) => (
          <li key={ability.name}>{ability.name}</li>
        ))}
      </ol>
    </div>
  );
}
