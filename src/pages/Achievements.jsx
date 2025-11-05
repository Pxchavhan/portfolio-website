import React from "react";

export default function Achievements() {
  return (
    <>
      <div className="achievements-container">
        {/* Background Elements */}
        <div className="achievements-background">
          <div className="achievements-orb orb-1"></div>
          <div className="achievements-orb orb-2"></div>
        </div>

        <div className="achievements-content">
          {/* Header */}
          <div className="achievements-header">
            <span className="badge">My Highlights</span>
            <h2 className="title">Achievements</h2>
            <div className="underline"></div>
          </div>

          {/* Achievements Grid */}
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="icon">📊</div>
              <h3 className="achievement-title">MHT-CET 2023</h3>
              <p className="achievement-desc">
                Secured <span className="highlight">96.83 percentile</span> in the Maharashtra Common Entrance Test,
                showcasing strong analytical and logical reasoning skills.
              </p>
            </div>

            <div className="achievement-card">
              <div className="icon">🏆</div>
              <h3 className="achievement-title">Academic Excellence</h3>
              <p className="achievement-desc">
                Achieved <span className="highlight">2nd place</span> in school for
                <span className="highlight"> 10th board examination</span> performance.
              </p>
            </div>

            <div className="achievement-card">
              <div className="icon">💻</div>
              <h3 className="achievement-title">We Hack Hackathon</h3>
              <p className="achievement-desc">
                Worked in a <span className="highlight">team of four</span> and handled
                <span className="highlight"> Firebase Authentication</span> and frontend development for the project,
                ensuring smooth and secure user access.
              </p>
            </div>

            <div className="achievement-card">
              <div className="icon">🚀</div>
              <h3 className="achievement-title">Tutedude Project</h3>
              <p className="achievement-desc">
                Independently built a working <span className="highlight">demo project</span> for Tutedude,
                managing both frontend and backend integration successfully.
              </p>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        /* Container */
        .achievements-container {
          min-height: 100vh;
          background-color: #020617;
          padding: 6rem 1rem 3rem;
          position: relative;
          overflow: hidden;
        }

        /* Background */
        .achievements-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .achievements-orb {
          position: absolute;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }

        .orb-1 {
          top: 15%;
          left: 10%;
          background: linear-gradient(135deg, #818cf8, #c084fc);
          animation: float 12s ease-in-out infinite;
        }

        .orb-2 {
          bottom: 15%;
          right: 10%;
          background: linear-gradient(135deg, #f9a8d4, #c084fc);
          animation: float-delayed 14s ease-in-out infinite;
        }

        /* Content */
        .achievements-content {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header */
        .achievements-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 50px;
          color: #a5b4fc;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(to right, #818cf8, #c084fc, #f9a8d4);
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }

        .underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(to right, #818cf8, #c084fc);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* Grid */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        /* Cards */
        .achievement-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.25);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .achievement-title {
          font-size: 1.5rem;
          color: #f3f4f6;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .achievement-desc {
          font-size: 1.05rem;
          color: #d1d5db;
          line-height: 1.8;
        }

        .highlight {
          color: #a5b4fc;
          font-weight: 600;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, 20px);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .title {
            font-size: 2.25rem;
          }
          .achievement-card {
            padding: 2rem;
          }
          .achievement-desc {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
