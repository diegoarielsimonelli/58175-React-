import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((r) => setData(r));
  }, []);

  return (
    <>
      Products
      {data.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.title}</h2>
          <span>{producto.price}</span>
          <img src={producto.image} alt={producto.title} />
          <p>{producto.description}</p>
          <button onClick={() => navigate(`detalle/${producto.id}`)}>
            Ver Detalle
          </button>
        </div>
      ))}
    </>
  );
}
