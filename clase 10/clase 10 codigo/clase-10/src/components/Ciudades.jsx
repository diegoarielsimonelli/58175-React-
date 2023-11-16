const ciudades = [
  { id: 1, nombre: "La Plata" },
  { id: 2, nombre: "Mar del Plata" },
  { id: 3, nombre: "Tandil" },
  { id: 4, nombre: "Quilmes" },
];
export default function Ciudades() {
  function handleSelectCity(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      Ciudades
      <select name='ciudades' onChange={handleSelectCity}>
        {ciudades.map((ciudades) => (
          <option key={ciudades.id} value={ciudades.nombre}>
            {ciudades.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}
