import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/utilities/NotFound";
import { ThemeContext } from "./components/pages/Context/ThemeContext.js";
import { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div
        className={`${
          isDarkMode
            ? "bg-black text-white ease-in duration-500 "
            : "bg-gray-300 text-black ease-in duration-500 "
        }`}
      >
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
