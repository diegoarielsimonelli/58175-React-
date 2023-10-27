
const ListaInvitados = () => {
  const invitados = [
    "HTML", "CSS", "Javscript", "React"
  ];

  return (
    <div>
      <h2>Lista de Invitados</h2>
      <ul>
        {
          invitados.map((invitado, index) => (
            <li key={index}>{invitado}</li>
          ))
        }
      </ul>
    </div>
  );
};
export default ListaInvitados;
