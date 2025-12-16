import { useState } from 'react';
import './Resume.css';
import resumePDF from '../assets/Travion_Ashford_Resume.pdf';

function Resume() {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>📄 My Resume</h1>
        <p className="resume-subtitle">Cybersecurity Professional | Full-Stack Developer</p>
        <a 
          href={resumePDF} 
          download="Travion_Ashford_Resume.pdf"
          className="download-btn"
        >
          ⬇️ Download PDF
        </a>
      </header>

      <div className="resume-viewer">
        <iframe
          src={resumePDF}
          className="pdf-frame"
          title="Travion Ashford Resume"
        />
      </div>

      <div className="resume-footer">
        <a 
          href={resumePDF} 
          download="Travion_Ashford_Resume.pdf"
          className="download-btn-bottom"
        >
          ⬇️ Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;