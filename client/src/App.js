import React, { useState } from "react";
import Login from "./Login";
import Chat from "./Chat";
import UsersList from "./UsersList";

function App() {
  const [username, setUsername] = useState(null);

  return (
    <div>
      <h1>Real-Time Chat App</h1>
      {!username ? (
        <Login setUsername={setUsername} />
      ) : (
        <>
          <UsersList />
          <Chat username={username} />
        </>
      )}
    </div>
  );
}

export default App;
