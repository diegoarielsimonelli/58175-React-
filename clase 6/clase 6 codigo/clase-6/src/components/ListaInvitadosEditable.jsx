import { useState } from "react";

// Luego veremos como resolver
// este problema usando un formulario
// lo que nos permite reducir la cantidad de código

const ListaInvitadosEditable = () => {
  const [nuevoInvitado, setNuevoInvitado] = useState("");
  const [invitados, setInvitados] = useState([]);

  // Este callback se llama cuando el input text
  // es modificado
  const handleChange = (e) => {
    // e es "event", el mismo parámetro
    // que manipulamos en javascript en los callbacks
    // de los eventos
    setNuevoInvitado(e.target.value);
  };

  // Este callback se llama cuando se presiona el botón
  // para agregar un nuevo invitado
  const agregarInvitado = (e) => {
    // Recordar que no podemos modificar la variable "invitados",
    // debemos modificar el array mediante setInvitados
    // para que se renderice nuevos datos
    // Tampoco podemos usar "push", debemos crear un array
    // nuevo basado en los datos actuales + el nuevo dato
    const nuevaLista = [...invitados, nuevoInvitado];
    setInvitados(nuevaLista);

    // Forma simplificada
    // setInvitados([...invitados, nuevoInvitado]);
  };

  return (
    <div>
      <div>
        <span>Agregar invitado</span>
        <input
          type='text'
          placeholder='ingrese nuevo invitado'
          onChange={handleChange}
          value={nuevoInvitado}
        />
        <button onClick={agregarInvitado}>Agregar</button>
      </div>
      <h2>Lista de Invitados</h2>
      <ul>
        {invitados.map((invitado, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            {invitado}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListaInvitadosEditable;
