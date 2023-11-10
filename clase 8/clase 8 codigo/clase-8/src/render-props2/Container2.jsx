import Filter from "./Filter";
import TaskList from "./TaskList";
export default function Container() {
  const task = [
    { id: 1, title: "Comprar leche", completed: true },
    { id: 2, title: "Ir al gym", completed: true },
    { id: 3, title: "Sacar al perro", completed: false },
    { id: 4, title: "Cocinar", completed: false },
  ];
  return (
    <div>
      <h2>Container 2- render-props2</h2>
      <Filter>
        {(filterState, handleFilterChange) => (
          <div>
            <label htmlFor='filter'>Filtrar por estado:</label>
            <select
              name=''
              id='filter'
              value={filterState}
              onChange={handleFilterChange}
            >
              <option value='all'>Todas</option>
              <option value='completed'>Completadas</option>
              <option value='uncompleted'>Incompletas</option>
            </select>
            <TaskList
              task={
                filterState === "all"
                  ? task
                  : task.filter((task) =>
                      filterState === "completed"
                        ? task.completed
                        : filterState === "uncompleted" && !task.completed
                    )
              }
            />
          </div>
        )}
      </Filter>
    </div>
  );
}
