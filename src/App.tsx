import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Ensure global styles are linked
import { MainComponent } from "./components/MainComponent";


const App: React.FC = () => {
 

  return (
    <div className="app">
    <Router>
      <Routes>
        
        <Route path="/chat" element={<MainComponent />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
