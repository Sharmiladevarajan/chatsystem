import React, { useState } from "react";
import { FaPaperPlane, FaPaperclip, FaMicrophone } from "react-icons/fa";


interface MessageInputProps {
  handleSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ handleSend }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      handleSend(message);
      setMessage(""); // Clear input field after sending
    }
  };

  return (
    <div className="message-input">
      {/* File Upload */}
      <label htmlFor="file-upload">
        <FaPaperclip className="attachment-icon" />
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />

      {/* Expandable Textarea */}
      <textarea
        className="message-field"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
        rows={1} // Start with one row
        style={{ resize: "none", overflow: "hidden" }} // Prevent manual resizing
      />

      {/* Mic & Send Buttons */}
      <FaMicrophone className="mic-icon" />
      <FaPaperPlane className="send-icon" onClick={handleSendMessage} />
    </div>
  );
};

export default MessageInput;
