import React from "react";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#2c2f33",
        color: "white",
        borderBottom: "2px solid white",
      }}
    >
      {/* Chat-AI Styling */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          letterSpacing: "2px",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        CHAT-AI
      </h2>

      {/* User Icon as a Button */}
      <div className="header-icons">
        <img
          src="images/user.png"
          alt="User"
          className="user-icon"
          style={{
            width: "40px",
            height: "40px",
            cursor: "pointer",
            borderRadius: "50%",
            border: "2px solid white", // White border added
            padding: "5px",
            backgroundColor: "white", // White background
            transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
          }}
          onClick={() => alert("User Icon Clicked!")} // Placeholder function
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.backgroundColor = "#ddd"; // Light gray on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "white";
          }}
        />
      </div>
    </div>
  );
};

export default Header;
