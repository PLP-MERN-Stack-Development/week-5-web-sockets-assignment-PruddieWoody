import React, { useState } from "react";
import { socket } from "./services/socket";

export default function Login({ setUsername }) {
  const [name, setName] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    socket.emit("authenticate", name);
    setUsername(name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter username" />
      <button type="submit">Join</button>
    </form>
  );
}
