import { useNavigate } from "react-router-dom";

export default function Celulares() {
  const navigate = useNavigate();
  return (
    <div>
      Celulares
      <button onClick={() => navigate("/")}>Ir a Home</button>
    </div>
  );
}
