import "./App.css";
import About from "./components/About";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AtomStatic from "./components/AtomStatic";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AtomStatic />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <button style={{ margin: "10px" }} onClick={() => navigate("/")}>
        Home
      </button>
      <button style={{ margin: "10px" }} onClick={() => navigate("/about")}>
        About
      </button>
    </>
  );
}

export default App;
