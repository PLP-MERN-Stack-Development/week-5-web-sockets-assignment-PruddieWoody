useEffect(() => {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
  socket.on("notification", (notif) => {
    setNotifications((prev) => [...prev, notif]);
    if (document.hidden && Notification.permission === "granted") {
      new Notification("Chat Notification", {
        body: notif.type === 'new-message'
          ? `${notif.from}: ${notif.message}`
          : `${notif.user} ${notif.type === 'user-join' ? 'joined' : 'left'} ${notif.room}`
      });
    }
    playSound();
  });
  return () => socket.off("notification");
}, []);
