import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          <nav className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#achievements" className="nav-link">Achievements</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
