export default function Formulario() {
  function handleSubmit(e) {
    e.preventDefault();

    const obj = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
    };
    console.log(obj);
  }

  return (
    <>
      <h1>Formulario</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Ingrese su nombre' name='nombre' />
        <input type='text' placeholder='Ingrese su apellido' name='apellido' />
        <input type='submit' value='Enviar' />
        <input type='reset' value='Reset' />
      </form>
    </>
  );
}
