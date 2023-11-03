import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Bienvenidos' />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantity) => console.log("cantidad agregada", quantity)}
      />
    </>
  );
}

export default App;
