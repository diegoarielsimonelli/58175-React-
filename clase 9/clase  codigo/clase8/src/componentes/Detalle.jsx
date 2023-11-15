import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detalle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((r) => r.json())
      .then((r) => setData(r));
  }, [id]);
  return (
    <div>
      Detalle
      <h2>{data.title}</h2>
      <span>{data.price}</span>
      <img src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <button onClick={() => navigate("/")}>Volver a Home</button>
    </div>
  );
}
