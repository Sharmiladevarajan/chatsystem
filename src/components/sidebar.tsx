import React, { useState } from "react";

interface Chat {
  chatId: any;
  chatName: string;
}

interface SidebarProps {
  chats: Chat[];
  getFunction: any;
}

const Sidebar: React.FC<SidebarProps> = ({ chats ,getFunction}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [activeChat, setActiveChat] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
console.log(chats);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="scroll-sidebar">
        <div className="sidebar-header">
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isCollapsed ? "➤" : "◀"}
          </button>
          {!isCollapsed && <button className="train-btn">Train</button>}
        </div>

        {!isCollapsed && (
          <>
            <h3 style={{ color: "white" }} onClick={()=>{
              getFunction("")
            }}>
              <strong>New Chat</strong>
            </h3>
            <p style={{ color: "white" }}>Explore Chats</p>

            <div className="chat-list">
              {chats?.map((chat) => (
                <div
                  id={chat.chatId}
                  className={`chat-item ${
                    activeChat === chat.chatId ? "active" : ""
                  }`}
                  onClick={(e:any) => {

                    setActiveChat(chat.chatId)
                    console.log(e.target?.id);
                    getFunction(e.target.id)
                  }
                    
                    


                  }
                >
                  {chat.chatName}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
