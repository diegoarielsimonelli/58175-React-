import { useEffect, useState } from "react";
import { getProducts } from "../../mocks";
import ItemList from "./ItemList";
export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h1>{greeting}</h1>;
      <ItemList products={products} />
    </>
  );
}
