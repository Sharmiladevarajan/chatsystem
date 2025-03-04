import React, { useState } from "react";
import { FaPaperPlane,FaPaperclip,FaUpload } from "react-icons/fa";




const MessageInput = ({ handleSend }) => {
  const [message, setMessage] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
      // You can handle the file upload logic here (e.g., send to backend)
    }
  };

 
//     <div className="message-input">
//       {/* File Upload Button */}
//       <label htmlFor="file-upload">
//       <img 
//   // src="images/attachment-icon.svg" 
//   src="images/attachment.png" 
//   className="attachment-icon"
//   alt="Upload Icon" 
//   width={20} 
//   height={20} 
  
//   onMouseOver={(e) => (e.currentTarget.style.opacity = 1)} // Full opacity on hover
//   onMouseOut={(e) => (e.currentTarget.style.opacity = 0.9)} // Reverts back
// />
//       </label>
//       <input
//         id="file-upload"
//         type="file"
//         accept="image/*"
//         style={{ display: "none" }}
//         onChange={handleFileUpload}
//       />

//       {/* Text Input Field */}
//       <input
//         type="text"
//         placeholder="How may I help you today?"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         onKeyPress={(e) => e.key === "Enter" && handleSend()}
//       />

//       {/* Send Button */}
//       {/* <FaPaperPlane className="send-icon" onClick={handleSend} /> */}
//       <img src="images/send.png" className="send-icon" onClick={handleSend} ></img>
//     </div>
{/* <div className="message-input">
      <input type="text" placeholder="Type your message..." />
      
      <FaPaperclip className="attachment-icon" />
      <FaPaperPlane className="send-icon" />
    </div> */}

    return (
      <div className="message-input">
        <input type="text" placeholder="Type your message..." />
        <img src="images/attachment.png" className="upload-icon" alt="Upload" />
        <img src="images/mic.png" className="mic-icon" alt="Voice" />
        <img src="images/send.png" className="send-icon" alt="Send" />
      </div>
    );
};

export default MessageInput;
