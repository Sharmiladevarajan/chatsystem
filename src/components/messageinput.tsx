import React, { useState } from "react";
import { FaPaperPlane, FaPaperclip, FaMicrophone } from "react-icons/fa";


// Define the props interface
interface MessageInputProps {
  handleSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ handleSend }) => {
  const [message, setMessage] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File uploaded:", file.name);
      // Handle file upload logic here
    }
  };

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
        onChange={handleFileUpload}
      />

      {/* Text Input */}
      <input
        type="text"
        className="message-field"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
      />

      {/* Mic & Send Buttons */}
      <FaMicrophone className="mic-icon" />
      <FaPaperPlane className="send-icon" onClick={handleSendMessage} />
    </div>
  );
};

export default MessageInput;
