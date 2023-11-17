import { useNavigate } from "react-router-dom";

export default function Notebooks() {
  const navigate = useNavigate();
  return (
    <div>
      Notebooks
      <button onClick={() => navigate("/")}>Ir a Home</button>
    </div>
  );
}
