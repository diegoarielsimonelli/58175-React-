import { useNavigate, useParams } from "react-router-dom";

export default function Persona() {
  const { nombre = "Nombre", apellido = "Apellido" } = useParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const nombre = e.currentTarget.nombre.value;
    const apellido = e.currentTarget.apellido.value;

    navigate(`/persona/${nombre}/${apellido}`);
  }

  return (
    <>
      <h1>
        Tu nombre es: {nombre} {apellido}
      </h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='nombre' placeholder='Ingrese su nombre' />
        <input type='text' name='apellido' placeholder='Ingrese su apellido' />
        <input type='submit' name='enviar' value={"Enviar"} />
        <input type='reset' name='reset' value={"Reset"} />
      </form>
    </>
  );
}
