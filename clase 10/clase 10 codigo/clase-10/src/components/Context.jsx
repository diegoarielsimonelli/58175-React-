import { createContext, useContext } from "react";

// Creación del contexto
const MiContexto = createContext();

// Componente funcional que usa el valor del contexto
const ConsumidorContexto = () => {
  const valor = useContext(MiContexto);
  return <div>{valor}</div>;
};

// Componente padre que establece el valor del contexto
const ProveedorContexto = ({ children }) => {
  const valor = "Valor compartido";
  return <MiContexto.Provider value={valor}>{children}</MiContexto.Provider>;
};

// Componente principal que utiliza el contexto
const Context = () => (
  <ProveedorContexto>
    <ConsumidorContexto />
  </ProveedorContexto>
);

export default Context;
// el componente ConsumidorContexto usa el hook useContext
// para acceder al valor proporcionado por el contexto (MiContexto).
// El componente ProveedorContexto establece el valor del contexto.
// Ambos componentes son agnósticos con respecto a cómo se utiliza el contexto
// y pueden funcionar con diferentes valores proporcionados.
