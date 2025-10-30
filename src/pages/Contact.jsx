import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        {/* Background Elements */}
        <div className="contact-background">
          <div className="contact-orb contact-orb-1"></div>
          <div className="contact-orb contact-orb-2"></div>
        </div>

        <div className="contact-content">
          {/* Header Section */}
          <div className="contact-header">
            <span className="contact-badge">Let's Connect</span>
            <h2 className="contact-title">Contact Me</h2>
            <div className="contact-underline"></div>
            <p className="contact-subtitle">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Main Contact Card */}
          <div className="contact-main">
            <div className="contact-card">
              <div className="contact-icon-main">💬</div>
              <p className="contact-description">
                Let's connect! You can reach out to me through email, LinkedIn, or check out my work on GitHub.
              </p>

              {/* Contact Methods */}
              <div className="contact-methods">
                {/* Email */}
                <a
                  href="mailto:prachichavhan0606@gmail.com"
                  className="contact-method"
                >
                  <div className="method-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3 className="method-title">Email</h3>
                    <p className="method-detail">prachichavhan0606@gmail.com</p>
                  </div>
                  <div className="method-arrow">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/pchavhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <div className="method-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3 className="method-title">LinkedIn</h3>
                    <p className="method-detail">linkedin.com/in/pchavhan</p>
                  </div>
                  <div className="method-arrow">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/pxchavhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <div className="method-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3 className="method-title">GitHub</h3>
                    <p className="method-detail">github.com/pxchavhan</p>
                  </div>
                  <div className="method-arrow">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">⚡</div>
                <h3 className="info-title">Quick Response</h3>
                <p className="info-text">I typically respond within 24 hours</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🤝</div>
                <h3 className="info-title">Open to Collaborate</h3>
                <p className="info-text">Always interested in exciting projects</p>
              </div>
              <div className="info-card">
                <div className="info-icon">💼</div>
                <h3 className="info-title">Job Opportunities</h3>
                <p className="info-text">Currently open to new opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Container */
        .contact-container {
          min-height: 100vh;
          background-color: #020617;
          padding: 6rem 1rem 2rem;
          position: relative;
          overflow: hidden;
        }

        /* Background Elements */
        .contact-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .contact-orb {
          position: absolute;
          width: 22rem;
          height: 22rem;
          border-radius: 50%;
          filter: blur(85px);
          opacity: 0.13;
        }

        .contact-orb-1 {
          top: 8%;
          right: 12%;
          background: linear-gradient(135deg, #818cf8, #c084fc);
          animation: float-contact 16s ease-in-out infinite;
        }

        .contact-orb-2 {
          bottom: 15%;
          left: 12%;
          background: linear-gradient(135deg, #c084fc, #f9a8d4);
          animation: float-contact-delayed 16s ease-in-out infinite;
        }

        /* Content */
        .contact-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Header Section */
        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-badge {
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

        .contact-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(to right, #818cf8, #c084fc, #f9a8d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }

        .contact-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(to right, #818cf8, #c084fc);
          margin: 0 auto 1.5rem;
          border-radius: 2px;
        }

        .contact-subtitle {
          font-size: 1.125rem;
          color: #9ca3af;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Main Content */
        .contact-main {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Contact Card */
        .contact-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 2.5rem;
          text-align: center;
        }

        .contact-icon-main {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }

        .contact-description {
          font-size: 1.125rem;
          color: #d1d5db;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        /* Contact Methods */
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateX(8px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
        }

        .method-icon {
          width: 50px;
          height: 50px;
          min-width: 50px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(192, 132, 252, 0.2));
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a5b4fc;
        }

        .method-icon svg {
          width: 24px;
          height: 24px;
        }

        .method-content {
          flex: 1;
          text-align: left;
        }

        .method-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #f3f4f6;
          margin-bottom: 0.25rem;
        }

        .method-detail {
          font-size: 0.9rem;
          color: #9ca3af;
        }

        .method-arrow {
          color: #818cf8;
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .contact-method:hover .method-arrow {
          transform: translateX(4px);
        }

        .method-arrow svg {
          width: 100%;
          height: 100%;
        }

        /* Info Cards */
        .info-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-5px);
        }

        .info-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .info-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #f3f4f6;
          margin-bottom: 0.5rem;
        }

        .info-text {
          font-size: 0.95rem;
          color: #9ca3af;
          line-height: 1.6;
        }

        /* Animations */
        @keyframes float-contact {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(22px, -22px) scale(1.05);
          }
        }

        @keyframes float-contact-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-22px, 22px) scale(1.05);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-container {
            padding: 5rem 1rem 2rem;
          }

          .contact-title {
            font-size: 2.25rem;
          }

          .contact-subtitle {
            font-size: 1rem;
          }

          .contact-card {
            padding: 2rem 1.5rem;
          }

          .contact-icon-main {
            font-size: 3rem;
          }

          .contact-description {
            font-size: 1rem;
          }

          .info-cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: 2rem;
          }

          .contact-card {
            padding: 1.75rem 1.25rem;
          }

          .contact-method {
            padding: 1.25rem;
          }

          .method-icon {
            width: 45px;
            height: 45px;
            min-width: 45px;
          }

          .method-icon svg {
            width: 20px;
            height: 20px;
          }

          .method-title {
            font-size: 1rem;
          }

          .method-detail {
            font-size: 0.85rem;
          }

          .info-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}