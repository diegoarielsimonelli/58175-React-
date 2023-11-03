const ListaInvitados = () => {
  const invitados = ["HTML", "CSS", "Javscript", "React"];

  return (
    <div>
      <h2>Lista de Invitados</h2>
      <ul>
        {invitados.map((invitado, index) => (
          <div key={index}>
            <li>{invitado}</li>
            <h1>Diego</h1>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ListaInvitados;
