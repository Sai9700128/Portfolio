import React from 'react';
import './Cards.css';

const ContactInfo = () => (
  <div className="project-card">
    <div className="contact-grid">
      <div className="contact-item">
        📧 <a href="mailto:burra.sa@northeastern.edu">burra.sa@northeastern.edu</a>
      </div>
      <div className="contact-item">📱 (857) 339-8482</div>
      <div className="contact-item">
        💼 <a href="https://linkedin.com/in/sai-kalyan-burra" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <div className="contact-item">
        🐙 <a href="https://github.com/saikalyanburra" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <div className="contact-item">
        📝 <a href="https://medium.com/@saikalyanburra" target="_blank" rel="noopener noreferrer">
          Medium
        </a>
      </div>
      <div className="contact-item">📍 Boston, MA</div>
    </div>
  </div>
);

export default ContactInfo;