import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import ChatWindow from "./components/chatwindow";
import MessageInput from "./components/messageinput";
import Header from "./components/header";
import "./App.css"; // Ensure global styles are linked

// Define message type
interface Message {
  text: string;
  sender: "user" | "bot";
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  // Function to handle sending messages
  const handleSend = (message: string) => {
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
          <MessageInput handleSend={handleSend} /> {/* 🔹 Fix applied here */}
        </div>
      </div>
    </div>
  );
};

export default App;
