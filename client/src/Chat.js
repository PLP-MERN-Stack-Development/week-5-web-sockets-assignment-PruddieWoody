const [typing, setTyping] = useState(false);
const [typingUsers, setTypingUsers] = useState([]);

useEffect(() => {
  socket.on("typing", ({ username, isTyping }) => {
    setTypingUsers((prev) => {
      if (isTyping) return [...new Set([...prev, username])];
      else return prev.filter(u => u !== username);
    });
  });
  return () => socket.off("typing");
}, []);

const handleTyping = (e) => {
  setInput(e.target.value);
  if (!typing) {
    setTyping(true);
    socket.emit("typing", true);
  }
  if (e.target.value === "") {
    setTyping(false);
    socket.emit("typing", false);
  }
};

return (
  <div>
    {/* ...messages... */}
    <form onSubmit={sendMessage}>
      <input value={input} onChange={handleTyping} placeholder="Type..." />
      <button type="submit">Send</button>
    </form>
    {typingUsers.length > 0 && (
      <div>
        {typingUsers.join(", ")} {typingUsers.length === 1 ? "is" : "are"} typing...
      </div>
    )}
  </div>
);
