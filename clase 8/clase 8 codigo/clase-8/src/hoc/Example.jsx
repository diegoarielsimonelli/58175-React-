import { useEffect } from "react";

function withConsoleLog(Component) {
  function WrapperComponent() {
    useEffect(() => {
      console.log("desde el Hoc-UseEffect");
    }, []);

    return (
      <div>
        <h3>Desde el Hoc!!!!</h3>
        <Component />
      </div>
    );
  }
  return WrapperComponent;
}

function Example() {
  return <h1>Example 1</h1>;
}

function Example2() {
  return <h1>Example 2</h1>;
}

//Transformo variables en componentes
export const ExampleWithConsoleLog = withConsoleLog(Example);
export const ExampleWithConsoleLog2 = withConsoleLog(Example2);
