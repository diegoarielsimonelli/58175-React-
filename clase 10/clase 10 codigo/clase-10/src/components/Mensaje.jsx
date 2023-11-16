// Componente funcional que muestra un mensaje recibido como prop
const Texto = ({ texto }) => <div>{texto}</div>;

// Componente padre que utiliza el componente Texto
export default function Mensaje() {
  return <Texto texto='Hola mundo' />;
}
