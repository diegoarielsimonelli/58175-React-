import { useEffect, useState } from "react";
import CardUser from "../CardUser/CardUser";

export default function CardContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((r) => r.json())
      .then((r) => setUsers(r));
  }, []);
  return (
    <>
      {" "}
      <h1>CardContainer</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "1rem",
        }}
      >
        {users.map((user) => (
          <>
            <CardUser
              key={user.id}
              data={user}
              style={{ width: "calc(20% - 1rem)" }}
            />
          </>
        ))}
      </div>
    </>
  );
}
