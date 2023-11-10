export default function TaskList({ task }) {
  return (
    <div>
      <h3>Lista de tareas: </h3>
      <ul style={{ listStyle: "none" }}>
        {task.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
