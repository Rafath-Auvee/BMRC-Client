import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/utilities/NotFound";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
