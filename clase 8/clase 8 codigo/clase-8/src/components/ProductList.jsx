import { useFetchData } from "../hooks/useFecthData"; //  importar correctamente el custom hook

export default function ProductList() {
  const apiUrl = "https://fakestoreapi.com/products";
  const { data, loading, error } = useFetchData(apiUrl);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul style={{ listStyle: "none" }}>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
