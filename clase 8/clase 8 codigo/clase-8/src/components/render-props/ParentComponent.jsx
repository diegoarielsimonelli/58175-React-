// Componente padre que utiliza render props
function RenderPropsExample(props) {
  return (
    <div>
      <h1>Ejemplo de Render Props</h1>
      {props.render("Texto pasado desde el componente padre")}
    </div>
  );
}

// Componente hijo que utiliza la función proporcionada como prop
function ChildComponent(props) {
  return (
    <div>
      <p>Este es el componente hijo</p>
      <p>{props.texto}</p>
    </div>
  );
}

// Componente padre que utiliza RenderPropsExample
export default function ParentComponent() {
  return (
    <RenderPropsExample render={(texto) => <ChildComponent texto={texto} />} />
  );
}
