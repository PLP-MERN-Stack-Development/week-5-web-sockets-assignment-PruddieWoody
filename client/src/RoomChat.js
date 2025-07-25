const addReaction = (messageId, reaction) => {
  socket.emit('message-reaction', { room, messageId, reaction });
};

useEffect(() => {
  socket.on('message-reaction', ({ messageId, user, reaction }) => {
    setMessages(prev =>
      prev.map(m =>
        m.id === messageId
          ? { ...m, reactions: { ...(m.reactions || {}), [user]: reaction } }
          : m
      )
    );
  });
  return () => socket.off('message-reaction');
}, [room]);

// In message render:
<button onClick={() => addReaction(m.id, "👍")}>👍</button>
<button onClick={() => addReaction(m.id, "❤️")}>❤️</button>
{m.reactions && Object.entries(m.reactions).map(([user, reaction]) => (
  <span key={user}>{user}: {reaction}</span>
))}
