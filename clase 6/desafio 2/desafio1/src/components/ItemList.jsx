import Item from "./Item";
export default function ItemList({ products }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}
