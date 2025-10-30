import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Deepfake Detection System",
      period: "Aug 2025 – Present",
      tech: ["Python", "PyTorch", "TensorFlow/Keras", "CNNs", "Transfer Learning"],
      icon: "🔍",
      highlights: [
        "Built an automated classifier to detect AI-generated face images using CNNs with ResNet50 in Keras",
        "Preprocessed and augmented Human Faces dataset with resizing, normalization, flips, rotations, and zoom for robustness",
        "Trained the model over multiple epochs, tuned hyperparameters, and monitored performance metrics",
        "Achieved 92% accuracy using binary classification with Adam optimizer and binary cross-entropy loss"
      ]
    },
    {
      title: "Skill Hiring Platform",
      period: "Jan 2025",
      tech: ["React", "Firebase", "OpenCV", "Machine Learning", "Python", "REST APIs"],
      icon: "💼",
      highlights: [
        "Collaborated in a team during We Hack 2025 hackathon to build a platform connecting skilled individuals with employers",
        "Developed a responsive frontend using component-based React architecture",
        "Integrated Firebase for user authentication and real-time database management",
        "Managed API integration for dynamic user profile data retrieval, updates, and validation"
      ]
    },
    {
      title: "Vendor Quality Management Platform",
      period: "June 2025 – July 2025",
      tech: ["React", "Firebase", "Node.js", "REST APIs", "Vercel"],
      icon: "✅",
      highlights: [
        "Created a secure web app for vendors to manage quality checks and supplier information",
        "Designed a responsive React frontend with personalized user access features",
        "Implemented Firebase Firestore for authentication and real-time data storage",
        "Built and deployed Node.js REST APIs on Vercel to handle dynamic supplier data"
      ]
    },
    {
      title: "Study Helper",
      period: "Oct 2025 – Present",
      tech: ["React", "Firebase", "OpenAI API", "Node.js", "CSS"],
      icon: "📚",
      highlights: [
        "Developing a personalized AI-powered study companion for organizing notes, generating summaries, and planning schedules",
        "Implementing intelligent content recommendations using OpenAI's API for adaptive learning assistance",
        "Integrating Firebase for authentication, cloud data storage, and real-time updates",
        "Building a clean and responsive interface with React to enhance productivity and user experience"
      ]
    }
  ];

  return (
    <>
      <div className="projects-container">
        {/* Background Elements */}
        <div className="projects-background">
          <div className="projects-orb projects-orb-1"></div>
          <div className="projects-orb projects-orb-2"></div>
        </div>

        <div className="projects-content">
          {/* Header Section */}
          <div className="projects-header">
            <span className="projects-badge">My Work</span>
            <h2 className="projects-title">Projects</h2>
            <div className="projects-underline"></div>
            <p className="projects-subtitle">
              Here are some of my recent projects showcasing my skills in web development, 
              machine learning, and full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <div className="project-period">{project.period}</div>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <ul className="project-highlights">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="highlight-item">
                      <span className="bullet">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-footer">
                  <button className="project-btn">
                    View Details
                    <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Container */
        .projects-container {
          min-height: 100vh;
          background-color: #020617;
          padding: 6rem 1rem 2rem;
          position: relative;
          overflow: hidden;
        }

        /* Background Elements */
        .projects-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .projects-orb {
          position: absolute;
          width: 25rem;
          height: 25rem;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.12;
        }

        .projects-orb-1 {
          top: 5%;
          right: 15%;
          background: linear-gradient(135deg, #818cf8, #c084fc);
          animation: float-projects 18s ease-in-out infinite;
        }

        .projects-orb-2 {
          bottom: 10%;
          left: 15%;
          background: linear-gradient(135deg, #c084fc, #f9a8d4);
          animation: float-projects-delayed 18s ease-in-out infinite;
        }

        /* Content */
        .projects-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Section */
        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .projects-badge {
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

        .projects-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(to right, #818cf8, #c084fc, #f9a8d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }

        .projects-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(to right, #818cf8, #c084fc);
          margin: 0 auto 1.5rem;
          border-radius: 2px;
        }

        .projects-subtitle {
          font-size: 1.125rem;
          color: #9ca3af;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 2rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.25);
        }

        /* Project Header */
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .project-icon {
          font-size: 2.5rem;
          background: rgba(99, 102, 241, 0.1);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .project-period {
          font-size: 0.875rem;
          color: #a5b4fc;
          font-weight: 500;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 50px;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        /* Project Title */
        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f3f4f6;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        /* Tech Tags */
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          padding: 0.4rem 0.9rem;
          background: rgba(192, 132, 252, 0.15);
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 50px;
          color: #e0e7ff;
          font-size: 0.8rem;
          font-weight: 500;
        }

        /* Project Highlights */
        .project-highlights {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
          flex-grow: 1;
        }

        .highlight-item {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: #d1d5db;
          font-size: 0.95rem;
          line-height: 1.6;
          align-items: flex-start;
        }

        .bullet {
          color: #818cf8;
          font-size: 1.2rem;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: -2px;
        }

        /* Project Footer */
        .project-footer {
          margin-top: auto;
        }

        .project-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(to right, #4f46e5, #9333ea);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .project-btn:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.4);
        }

        .arrow-icon {
          width: 1rem;
          height: 1rem;
          transition: transform 0.3s ease;
        }

        .project-btn:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* Animations */
        @keyframes float-projects {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(25px, -25px) scale(1.05);
          }
        }

        @keyframes float-projects-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-25px, 25px) scale(1.05);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .projects-container {
            padding: 5rem 1rem 2rem;
          }

          .projects-title {
            font-size: 2.25rem;
          }

          .projects-subtitle {
            font-size: 1rem;
          }

          .project-card {
            padding: 1.75rem;
          }

          .project-icon {
            width: 50px;
            height: 50px;
            font-size: 2rem;
          }

          .project-title {
            font-size: 1.25rem;
          }

          .highlight-item {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .projects-title {
            font-size: 2rem;
          }

          .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .project-period {
            font-size: 0.75rem;
            padding: 0.4rem 0.8rem;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.35rem 0.75rem;
          }

          .project-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}