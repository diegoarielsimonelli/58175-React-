import Button from "@mui/material/Button";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import "./App.css";

function App() {
  return (
    <>
      <h1>bienvenidos/as</h1>
      <Button color='success' variant='contained'>
        Contained
      </Button>
      <Button size='small'>Small</Button>
      <Button size='medium'>Medium</Button>
      <Button variant='outlined' startIcon={<AddBusinessIcon />}>
        Delete
      </Button>
    </>
  );
}

export default App;
