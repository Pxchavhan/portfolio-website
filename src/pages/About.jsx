import React from 'react';

export default function About() {
  return (
    <>
      <div className="about-container">
        {/* Background Elements */}
        <div className="about-background">
          <div className="about-orb about-orb-1"></div>
          <div className="about-orb about-orb-2"></div>
        </div>

        <div className="about-content">
          {/* Header Section */}
          <div className="about-header">
            <span className="about-badge">Get to know me</span>
            <h2 className="about-title">About Me</h2>
            <div className="about-underline"></div>
          </div>

          {/* Main Content */}
          <div className="about-main">
            {/* Profile Card */}
            <div className="profile-card">
              <div className="profile-icon">👩‍💻</div>
              <p className="about-description">
                I'm currently pursuing <span className="highlight">Computer Engineering</span> and have hands-on experience 
                with <span className="highlight">React</span>, <span className="highlight">Python</span>, and <span className="highlight">Firebase</span>. 
                I enjoy building intelligent and user-friendly applications that make a difference.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">💡</div>
                <h3 className="skill-title">Problem Solving</h3>
                <p className="skill-desc">Strong in problem-solving and Data Structures & Algorithms</p>
              </div>

              <div className="skill-item">
                <div className="skill-icon">🤖</div>
                <h3 className="skill-title">AI/ML & Web Dev</h3>
                <p className="skill-desc">Passionate about AI/ML and modern web development technologies</p>
              </div>

              <div className="skill-item">
                <div className="skill-icon">🏆</div>
                <h3 className="skill-title">Active Learner</h3>
                <p className="skill-desc">Hackathon participant and continuous learner in tech</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="tech-stack">
              <h3 className="tech-title">Technologies I Work With</h3>
              <div className="tech-badges">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">DSA</span>
                <span className="tech-badge">Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Container */
        .about-container {
          min-height: 100vh;
          background-color: #020617;
          padding: 6rem 1rem 2rem;
          position: relative;
          overflow: hidden;
        }

        /* Background Elements */
        .about-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .about-orb {
          position: absolute;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }

        .about-orb-1 {
          top: 10%;
          right: 10%;
          background: linear-gradient(135deg, #818cf8, #c084fc);
          animation: float-about 15s ease-in-out infinite;
        }

        .about-orb-2 {
          bottom: 20%;
          left: 10%;
          background: linear-gradient(135deg, #c084fc, #f9a8d4);
          animation: float-about-delayed 15s ease-in-out infinite;
        }

        /* Content */
        .about-content {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header Section */
        .about-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .about-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background-color: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 50px;
          color: #a5b4fc;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .about-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(to right, #818cf8, #c084fc, #f9a8d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }

        .about-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(to right, #818cf8, #c084fc);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* Main Content */
        .about-main {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        /* Profile Card */
        .profile-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 2.5rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .profile-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }

        .profile-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }

        .about-description {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #d1d5db;
          max-width: 800px;
          margin: 0 auto;
        }

        .highlight {
          color: #a5b4fc;
          font-weight: 600;
          position: relative;
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.25rem;
          padding: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .skill-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(99, 102, 241, 0.2);
        }

        .skill-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .skill-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #f3f4f6;
          margin-bottom: 0.75rem;
        }

        .skill-desc {
          font-size: 1rem;
          color: #9ca3af;
          line-height: 1.6;
        }

        /* Tech Stack */
        .tech-stack {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 2.5rem;
        }

        .tech-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #f3f4f6;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .tech-badge {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(192, 132, 252, 0.2));
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 50px;
          color: #e0e7ff;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tech-badge:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(192, 132, 252, 0.3));
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }

        /* Animations */
        @keyframes float-about {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.05);
          }
        }

        @keyframes float-about-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, 20px) scale(1.05);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .about-container {
            padding: 5rem 1rem 2rem;
          }

          .about-title {
            font-size: 2.25rem;
          }

          .about-description {
            font-size: 1.125rem;
          }

          .profile-card {
            padding: 2rem 1.5rem;
          }

          .skill-item {
            padding: 1.5rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .tech-stack {
            padding: 2rem 1.5rem;
          }

          .profile-icon {
            font-size: 3rem;
          }
        }

        @media (max-width: 480px) {
          .about-title {
            font-size: 2rem;
          }

          .about-description {
            font-size: 1rem;
          }

          .tech-badge {
            font-size: 0.875rem;
            padding: 0.625rem 1.25rem;
          }
        }
      `}</style>
    </>
  );
}