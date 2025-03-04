
import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import ChatWindow from "./components/chatwindow";
import MessageInput from "./components/messageinput";
import Header from "./components/header";
import "./App.css"; // Ensure global styles are linked

function App() {
  const [messages, setMessages] = useState([]);

  // Function to handle sending messages
  const handleSendMessage = (message) => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
    }
  };

  return (
    <div className="app">
    <div className="main-container">
      <Sidebar />
      <div className="content-container">
        <Header />
        <ChatWindow messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  </div>

  );
}

export default App;
