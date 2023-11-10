import { useState } from "react";

export default function withSearch(Component, dataset) {
  return () => {
    const [query, setQuery] = useState("");

    function handleChange(e) {
      setQuery(e.target.value);
    }

    return (
      <div>
        <input onChange={handleChange} value={query} />
        <Component query={query} dataset={dataset} />
      </div>
    );
  };
}
