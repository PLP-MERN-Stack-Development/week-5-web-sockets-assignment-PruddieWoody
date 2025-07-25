import React, { useState, useEffect } from "react";
import { socket } from "./services/socket";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    socket.on("userList", setUsers);
    return () => socket.off("userList");
  }, []);
  return (
    <ul>
      {users.map((u, i) => (
        <li key={i}>
          {u.username} {u.online ? "🟢" : "⚪️"}
        </li>
      ))}
    </ul>
  );
}
