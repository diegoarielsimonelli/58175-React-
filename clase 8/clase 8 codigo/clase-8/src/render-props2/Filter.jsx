import { useState } from "react";
export default function Filter({ children }) {
  const [filterState, setFilterState] = useState("all");
  function handleFilterChange(e) {
    setFilterState(e.target.value);
  }
  return children(filterState, handleFilterChange);
}
