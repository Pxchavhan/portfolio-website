import React from "react";

export default function Education() {
  return (
    <>
      <div className="education-container">
        {/* Background Elements */}
        <div className="education-background">
          <div className="education-orb education-orb-1"></div>
          <div className="education-orb education-orb-2"></div>
        </div>

        <div className="education-content">
          {/* Header Section */}
          <div className="education-header">
            <span className="education-badge">My Academic Journey</span>
            <h2 className="education-title">Education</h2>
            <div className="education-underline"></div>
          </div>

          {/* Timeline Section */}
          <div className="education-timeline">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3 className="education-level">Bachelor of Technology (B.Tech)</h3>
              <h4 className="education-institution">Veermata Jijabai Technological Institute (VJTI)</h4>
              <p className="education-duration">2023 – Present</p>
              <p className="education-desc">
                Pursuing <span className="highlight">Computer Engineering</span> with a focus on 
                software development, AI, and system design. Actively involved in projects and hackathons.
              </p>
            </div>

            <div className="education-card">
              <div className="education-icon">🏫</div>
              <h3 className="education-level">Higher Secondary Education</h3>
              <h4 className="education-institution">New English Junior College</h4>
              <p className="education-duration">2021 – 2023</p>
              <p className="education-desc">
                Completed HSC with <span className="highlight">Science (PCM)</span> stream, building a 
                strong foundation in logical reasoning and analytical problem-solving.
              </p>
            </div>

            <div className="education-card">
              <div className="education-icon">📘</div>
              <h3 className="education-level">Secondary School Education</h3>
              <h4 className="education-institution">G.R. Patil Vidyamandir</h4>
              <p className="education-duration">2016 – 2021</p>
              <p className="education-desc">
                Completed SSC with distinction. Developed a keen interest in mathematics and technology.
              </p>
            </div>

            <div className="education-card">
              <div className="education-icon">📚</div>
              <h3 className="education-level">Primary Education</h3>
              <h4 className="education-institution">R.G.S. English High School</h4>
              <p className="education-duration">2009 – 2016</p>
              <p className="education-desc">
                Established academic fundamentals and participated in extracurricular activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Container */
        .education-container {
          min-height: 100vh;
          background-color: #020617;
          padding: 6rem 1rem 3rem;
          position: relative;
          overflow: hidden;
        }

        /* Background */
        .education-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .education-orb {
          position: absolute;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.15;
        }

        .education-orb-1 {
          top: 15%;
          left: 15%;
          background: linear-gradient(135deg, #818cf8, #c084fc);
          animation: floatEdu 15s ease-in-out infinite;
        }

        .education-orb-2 {
          bottom: 20%;
          right: 10%;
          background: linear-gradient(135deg, #c084fc, #f9a8d4);
          animation: floatEdu2 15s ease-in-out infinite;
        }

        /* Content */
        .education-content {
          position: relative;
          z-index: 10;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Header */
        .education-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .education-badge {
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

        .education-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(to right, #818cf8, #c084fc, #f9a8d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }

        .education-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(to right, #818cf8, #c084fc);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* Timeline */
        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .education-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }

        .education-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .education-level {
          font-size: 1.5rem;
          color: #f3f4f6;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .education-institution {
          font-size: 1.125rem;
          color: #a5b4fc;
          margin-bottom: 0.25rem;
        }

        .education-duration {
          font-size: 0.95rem;
          color: #9ca3af;
          margin-bottom: 0.75rem;
        }

        .education-desc {
          font-size: 1rem;
          color: #d1d5db;
          line-height: 1.7;
        }

        .highlight {
          color: #a5b4fc;
          font-weight: 600;
        }

        /* Animations */
        @keyframes floatEdu {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(25px, -25px); }
        }

        @keyframes floatEdu2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-25px, 25px); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .education-title { font-size: 2.25rem; }
          .education-card { padding: 1.75rem; }
        }

        @media (max-width: 480px) {
          .education-title { font-size: 2rem; }
          .education-level { font-size: 1.25rem; }
        }
      `}</style>
    </>
  );
}
