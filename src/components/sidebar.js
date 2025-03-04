import React, { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeChat, setActiveChat] = useState(null);
  const chats = ["Chat 1", "Chat 2", "Chat 3", "Chat 4"];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? "➤" : "◀"}
        </button>
        {!isCollapsed && (
          <button className="train-btn">Train</button>
        )}
      </div>

      {!isCollapsed && (
        <>
          <h3 style={{ color: "white" }}><strong>New Chat</strong></h3>
<p style={{ color: "white" }}>Explore Chats</p>

          <div className="chat-list">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`chat-item ${activeChat === index ? "active" : ""}`}
                onClick={() => setActiveChat(index)}
              >
                {chat}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
