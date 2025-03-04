import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";




const MessageInput = ({ handleSend }) => {
  const [message, setMessage] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
      // You can handle the file upload logic here (e.g., send to backend)
    }
  };

  return (
    <div className="message-input">
      {/* File Upload Button */}
      <label htmlFor="file-upload">
      <img 
  src="images/Vector.png" 
  alt="Upload Icon" 
  width={20} 
  height={20} 
  style={{
    filter: "grayscale(100%) brightness(0)", // Converts to black
    opacity: 0.9, // Slightly faded effect
    cursor: "pointer", // Clickable cursor
    transition: "opacity 0.3s ease", // Smooth hover effect
    display: "block", // Ensures proper centering
  }}
  onMouseOver={(e) => (e.currentTarget.style.opacity = 1)} // Full opacity on hover
  onMouseOut={(e) => (e.currentTarget.style.opacity = 0.9)} // Reverts back
/>
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />

      {/* Text Input Field */}
      <input
        type="text"
        placeholder="How may I help you today?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />

      {/* Send Button */}
      <FaPaperPlane className="send-icon" onClick={handleSend} />
    </div>
  );
};

export default MessageInput;
