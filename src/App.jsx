import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Achievements from "./pages/Achievements";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <header>
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/education" className="nav-link">Education</Link>
            <Link to="/achievements" className="nav-link">Achievements</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
