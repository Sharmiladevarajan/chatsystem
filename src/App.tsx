import React, { useState } from "react";

import "./App.css"; // Ensure global styles are linked
import { MainComponent } from "./components/MainComponent";

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
     <MainComponent/>
    </div>
  );
};

export default App;
