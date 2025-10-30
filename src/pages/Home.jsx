import React from 'react';

export default function Home() {
  return (
    <>
      <div className="hero-container">
        {/* Sophisticated grid background */}
        <div className="background-gradient">
          <div className="grid-pattern"></div>
        </div>

        {/* Elegant gradient orbs */}
        <div className="orbs-container">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>

        {/* Main content container */}
        <div className="content-wrapper">
          <div className="content-center">
            {/* Professional badge */}
            <div className="status-badge">
              <div className="status-dot"></div>
              <span className="status-text">Available for Opportunities</span>
            </div>

            {/* Main heading */}
            <h1 className="main-heading">
              <span className="heading-text">Hi, I'm </span>
              <span className="heading-gradient">Prachi</span>
            </h1>

            {/* Role/Title */}
            <div className="role-section">
              <h2 className="role-title">Computer Engineering Student</h2>
            </div>

            {/* Professional description */}
            <p className="description">
              Passionate about building innovative solutions through 
              <span className="highlight-indigo"> software development</span>, 
              <span className="highlight-purple"> machine learning</span>, and 
              <span className="highlight-pink"> modern web technologies</span>.
            </p>

            {/* Skills showcase */}
            <div className="skills-container">
              <div className="skill-card">
                <span className="skill-icon">💻</span>
                <span className="skill-label">Full-Stack Development</span>
              </div>
              <div className="skill-card">
                <span className="skill-icon">🤖</span>
                <span className="skill-label">Machine Learning</span>
              </div>
              <div className="skill-card">
                <span className="skill-icon">🌐</span>
                <span className="skill-label">Web Technologies</span>
              </div>
              <div className="skill-card">
                <span className="skill-icon">⚡</span>
                <span className="skill-label">Problem Solving</span>
              </div>
            </div>

            {/* Professional CTAs */}
            <div className="cta-container">
              <button className="btn btn-primary">
                <span>View Portfolio</span>
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="btn btn-secondary">
                Download Resume
              </button>
              <button className="btn btn-secondary">
                <span>Connect</span>
                <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        /* Hero Container */
        .hero-container {
          min-height: 100vh;
          background-color: #020617;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5rem 1rem 1rem;
          position: relative;
          overflow: hidden;
        }

        /* Background Gradient */
        .background-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom right, #020617, #312e81, #020617);
        }

        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.1;
        }

        /* Orbs Container */
        .orbs-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .orb {
          position: absolute;
          width: 24rem;
          height: 24rem;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(80px);
          opacity: 0.1;
        }

        .orb-1 {
          top: 0;
          left: 25%;
          background-color: #4f46e5;
          animation: float 20s ease-in-out infinite;
        }

        .orb-2 {
          bottom: 0;
          right: 25%;
          background-color: #9333ea;
          animation: float-delayed 20s ease-in-out infinite;
        }

        /* Content Wrapper */
        .content-wrapper {
          position: relative;
          z-index: 10;
          max-width: 72rem;
          margin: 0 auto;
          width: 100%;
        }

        .content-center {
          text-align: center;
        }

        /* Status Badge */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          margin-bottom: 2rem;
          background-color: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 9999px;
          backdrop-filter: blur(4px);
        }

        .status-dot {
          width: 0.5rem;
          height: 0.5rem;
          background-color: #818cf8;
          border-radius: 50%;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .status-text {
          color: #a5b4fc;
          font-size: 0.875rem;
          font-weight: 500;
        }

        /* Main Heading */
        .main-heading {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .heading-text {
          color: white;
        }

        .heading-gradient {
          background: linear-gradient(to right, #818cf8, #c084fc, #f9a8d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Role Section */
        .role-section {
          margin-bottom: 2rem;
        }

        .role-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #d1d5db;
          margin-bottom: 1rem;
        }

        /* Description */
        .description {
          font-size: 1.25rem;
          color: #9ca3af;
          max-width: 56rem;
          margin: 0 auto 3rem;
          line-height: 1.75;
          padding: 0 1rem;
        }

        .highlight-indigo {
          color: #a5b4fc;
          font-weight: 500;
        }

        .highlight-purple {
          color: #d8b4fe;
          font-weight: 500;
        }

        .highlight-pink {
          color: #fbcfe8;
          font-weight: 500;
        }

        /* Skills Container */
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          padding: 0 1rem;
        }

        .skill-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(4px);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(99, 102, 241, 0.5);
          transform: scale(1.05);
        }

        .skill-icon {
          font-size: 1.5rem;
        }

        .skill-label {
          color: #d1d5db;
          font-weight: 500;
          font-size: 0.875rem;
        }

        /* CTA Container */
        .cta-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          padding: 0 1rem;
          margin-bottom: 4rem;
        }

        .btn {
          width: 100%;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: linear-gradient(to right, #4f46e5, #9333ea);
          color: white;
          box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
        }

        .btn-primary:hover {
          box-shadow: 0 20px 50px -12px rgba(99, 102, 241, 0.5);
          transform: scale(1.05);
        }

        .btn-primary .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(4px);
        }

        .btn-secondary {
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(4px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(99, 102, 241, 0.5);
          transform: scale(1.05);
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Responsive Design */
        @media (min-width: 640px) {
          .hero-container {
            padding: 5rem 1.5rem 1.5rem;
          }

          .main-heading {
            font-size: 3.75rem;
          }

          .role-title {
            font-size: 2.25rem;
          }

          .description {
            font-size: 1.5rem;
          }

          .skill-label {
            font-size: 1rem;
          }

          .cta-container {
            flex-direction: row;
          }

          .btn {
            width: auto;
          }
        }

        @media (min-width: 768px) {
          .main-heading {
            font-size: 4.5rem;
          }

          .role-title {
            font-size: 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-container {
            padding: 5rem 2rem 2rem;
          }

          .main-heading {
            font-size: 6rem;
          }

          .role-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </>
  );
}