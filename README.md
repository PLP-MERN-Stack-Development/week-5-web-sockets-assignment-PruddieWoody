# Real-Time Chat Application

A modern, full-stack real-time chat application demonstrating bidirectional communication between clients and server using **Socket.io**, **Node.js/Express**, and a **React** frontend. This app supports global chat, private messaging, multiple channels, typing indicators, file sharing, live notifications, and responsive design.

---

## 🚀 Project Overview

This project is designed to showcase a robust and scalable real-time chat system. It demonstrates:

- WebSocket-based communication for instant message delivery
- Modular backend and frontend codebases
- User experience features like typing indicators, online status, and notifications
- Extensible architecture for adding advanced features

---

## 🛠️ Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/your-chat-app.git
cd your-chat-app
```

### 2. **Install Dependencies**

#### Server

```bash
cd server
npm install
```

#### Client

```bash
cd ../client
npm install
```

### 3. **Run the Application**

#### Start the Server

```bash
cd ../server
npm start
```

By default, the server runs on [http://localhost:5000](http://localhost:5000).

#### Start the Client

```bash
cd ../client
npm start
```

The React app will launch at [http://localhost:3000](http://localhost:3000).

**Note:**  
Ensure both server and client are running simultaneously in separate terminals.

---

## ✨ Features Implemented

### Core Features

- **User Authentication**  
  Simple username-based login.

- **Global Chat Room**  
  All users can join and send messages to a shared space.

- **Timestamps & Sender Info**  
  Every message displays the sender's name and time sent.

- **Typing Indicators**  
  See when other users are composing messages.

- **Online/Offline Status**  
  Visual cues for which users are currently online.

---

### Advanced Features

- **Private Messaging**  
  Direct, real-time chat between individual users.

- **Multiple Chat Rooms/Channels**  
  Users can join, leave, and chat in different thematic rooms.

- **Room-Based Typing Indicators**  
  "User is typing..." per room/channel.

- **File & Image Sharing**  
  Upload and share images or files in chats.

- **Read Receipts**  
  Know when your messages have been seen.

- **Message Reactions**  
  React to messages with emojis.

---

### Real-Time Notifications

- **New Message Alerts**  
  In-app, sound, and browser notifications for incoming messages.

- **User Join/Leave Notifications**  
  See when users enter or exit rooms.

- **Unread Message Count**  
  Badges indicate unread messages per chat.

---

### UX & Performance

- **Message Pagination**  
  Load older messages on demand.

- **Reconnection Logic**  
  Automatically reconnects on network interruptions.

- **Socket.io Optimization**  
  Uses namespaces and rooms for efficient messaging.

- **Responsive Design**  
  Works seamlessly on desktops and mobile devices.

---



