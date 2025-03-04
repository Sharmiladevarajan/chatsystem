import React from "react";
import { User, Bot } from "lucide-react";

interface Message {
  role: string; // "user" or "bot"
  content: string;
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  
  return (
    <div className="chat-window">
      {messages.map((msg:any, index:any) => (
        <div
          key={index}
          className={`message-wrapper ${
            msg.role === "user" ? "user-message" : "bot-message"
          }`}
        >
          {msg.role === "bot" && <Bot className="icon" />}
          <div className="message">{msg.content}</div>
          {msg.role === "user" && <User className="icon" />}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
