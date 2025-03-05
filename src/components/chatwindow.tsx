import React, { useEffect, useRef } from "react";
import { User, Bot } from "lucide-react";

interface Message {
  role: string; // "user" or "bot"
  content: string;
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  const chatRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the bottom when messages change
  // useEffect(() => {
  //   if (chatRef.current) {
  //     chatRef.current.scrollTop = chatRef.current.scrollHeight;
  //   }
  // }, [messages]);

  return (
    <div className="chat-window" >
    {/* <div className="chat-window" ref={chatRef}> */}
      {messages?.map((msg, index) => (
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
