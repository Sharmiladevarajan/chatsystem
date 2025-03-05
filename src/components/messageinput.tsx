import React, { useState, useEffect, useRef } from "react";
import { FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";

interface MessageInputProps {
  handleSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ handleSend }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      handleSend(message);
      setMessage(""); // Clear input field after sending
    }
  };

  // Automatically adjust the textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scrollHeight to auto-expand
    }
  }, [message]); // Run whenever the message changes

  return (
    <div className="message-input">
      {/* File Upload */}
      <label htmlFor="file-upload" aria-label="Upload file">
        {/* Cast to JSX.Element explicitly */}
        {React.createElement(FaPaperclip as React.ElementType, { className: "attachment-icon" })}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />

      {/* Expandable Textarea */}
      <textarea
        ref={textareaRef}
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
      />

      {/* Mic Button */}
      <button
        className="mic-icon background-remove"
        aria-label="Start microphone"
        onClick={() => console.log("Microphone button clicked")} // You can add mic functionality here
      >
        {/* Cast to JSX.Element explicitly */}
        {React.createElement(FaMicrophone as React.ElementType)}
      </button>

      {/* Send Message Button */}
      <button
        className="send-icon background-remove"
        aria-label="Send message"
        onClick={handleSendMessage}
        disabled={!message.trim()} // Disable the send button if the message is empty
      >
        {/* Cast to JSX.Element explicitly */}
        {React.createElement(FaPaperPlane as React.ElementType)}
      </button>
    </div>
  );
};

export default MessageInput;
