// Componente de botón que utiliza render props
function Button(props) {
  return (
    <button style={props.style} onClick={props.onClick}>
      {props.render()}
    </button>
  );
}

// Componente padre que utiliza Button con render props
export default function ButtonProps() {
  return (
    <div>
      <h1>Render Props Simple</h1>
      <Button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => alert("Botón azul clicado")}
        render={() => "Clicame (Azul)"}
      />
      <Button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={() => alert("Botón rojo clicado")}
        render={() => "Clicame (Rojo)"}
      />
    </div>
  );
}
