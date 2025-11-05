import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="nav-logo">
            Prachi
          </Link>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span
              style={{
                transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            ></span>
            <span style={{ opacity: isOpen ? 0 : 1 }}></span>
            <span
              style={{
                transform: isOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
              }}
            ></span>
          </div>

          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(to right, #818cf8, #c084fc, #f9a8d4);
          -webkit-background-clip: text;
          color: transparent;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links li a {
          color: #d1d5db;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links li a:hover {
          color: #a78bfa;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 70px;
            right: 0;
            width: 100%;
            flex-direction: column;
            background: rgba(2, 6, 23, 0.95);
            text-align: center;
            padding: 1rem 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }

          .nav-links.active {
            max-height: 300px;
          }

          .nav-links li {
            margin: 1rem 0;
          }
        }
      `}</style>
    </>
  );
}
