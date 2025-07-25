import React, { useState, useEffect } from "react";
import { socket } from "./services/socket";

export default function PrivateChat({ username, recipient }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("private-message", (msg) => {
      if (
        (msg.from === username && msg.to === recipient) ||
        (msg.from === recipient && msg.to === username)
      ) {
        setMessages((prev) => [...prev, msg]);
      }
    });
    return () => socket.off("private-message");
  }, [username, recipient]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("private-message", { to: recipient, message: input });
    setInput("");
  };

  return (
    <div>
      <h3>Chat with {recipient}</h3>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>
            <b>{m.from === username ? "You" : m.from}:</b> {m.message}
            <span> {new Date(m.timestamp).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
