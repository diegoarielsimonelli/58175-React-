import "./App.css";
import Padre from "./elevar/Padre";
import Contador from "./components/Contador";
import Container2 from "./render-props2/Container2";
import ProductList from "./components/ProductList";
import { ExampleWithConsoleLog2, ExampleWithConsoleLog } from "./hoc/Example";
import { CommentFormWithState } from "./hoc/LoginForm";
import { NuevoComponenteConComentarios } from "./hoc/NewForm";
import withSearch from "./hoc2/withSearch";
import TodoList from "./hoc2/TodoList";
import TodoContainer from "./presentation-container/todoContainer";
import Menu from "./compound/menu";
import Store from "./provider/store";
import TodosView from "./provider/todosView";
import Cat from "./components/render-props/Cat";
import Bool from "./components/render-props/ToggleBool";
import Bool2 from "./components/render-props/ToggleBool2";
import RenderPropsCount from "./components/render-props/RenderPropsCount";
import ParentComponent from "./components/render-props/ParentComponent";
import ButtonProps from "./components/render-props/ButtonProps";
import RenderPropsCount2 from "./components/render-props/RenderPropsCount2";
import OldArticle from "./compound2/OldArticle";
import Article from "./compound2/Article";
import Container from "./components/Container";
const products = [
  {
    id: 0,
    title: "carne",
  },
  {
    id: 1,
    title: "leche",
  },
  {
    id: 2,
    title: "verduras",
  },
];
const todos = [
  {
    id: 0,
    title: "hacer tarea",
    completed: false,
  },
  {
    id: 1,
    title: "crear video",
    completed: true,
  },
  {
    id: 2,
    title: "limpiar casa",
    completed: false,
  },
];

const ProductListWithSearch = withSearch(ProductList, products);
const TodoListWithSearch = withSearch(TodoList, todos);
function App() {
  return (
    <>
      <h1>8. Workshop: Hooks, Children y Patrones</h1>
      {/* <h2>Custom Hooks</h2> */}
      {/* <Contador /> */}
      {/* <ProductList /> */}
      {/* <h2>Elevar o subir el Estado</h2>
      <Padre /> */}
      {/* Children
      <Container /> */}
      {/* <h2>HOC</h2> */}
      {/* <ExampleWithConsoleLog /> */}
      {/* <ExampleWithConsoleLog2 /> */}
      {/* <CommentFormWithState /> */}
      {/* <NuevoComponenteConComentarios /> */}
      {/* <ProductListWithSearch /> 
      <TodoListWithSearch />  */}
      {/* <h2>Presentation-container</h2> */}
      {/* <TodoContainer /> */}
      {/* <h2>Render Props</h2> */}
      {/* <Bool /> */}
      {/* <Bool2 /> */}
      {/* <RenderPropsCount />
      <RenderPropsCount2 /> */}
      {/* <ParentComponent /> */}
      {/* <ButtonProps /> */}
      <Container2 />

      {/* ----useContext---- */}
      {/* <h2>Provider</h2>
      <Store>
        <TodosView />
      </Store> */}
      {/* <h2>Compound</h2> */}
      {/* <Menu>
        <Menu.Item title='Elemento 1' />
        <Menu.Item title='Elemento 2' />
        <Menu.Item title='Elemento 3' />
      </Menu> */}
      {/* <OldArticle
        title='Título del artículo'
        titleClass='article-title'
        content='Contenido del artículo'
        contentClass='article-content'
        container='article'
        descripcion='Descripción del artículo'
        descripcionClass='article-description'
        span='Span del artículo'
        spanClass='article-span'
      /> */}
      {/* <Article className='article-container'>
        <Article.Title className='article-title'>
          Título del artículo
        </Article.Title>
        <Article.Content className='article-content'>
          Contenido del artículo
        </Article.Content>
        <Article.Footer className='article-footer'>
          Pie del artículo
        </Article.Footer>
      </Article> */}
    </>
  );
}

export default App;
