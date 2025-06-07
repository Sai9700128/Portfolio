import React from 'react';

const ContactInfo = () => (
  <div className="project-card">
    <div className="contact-grid">
      <div className="contact-item">
        📧 <a href="mailto:burra.sa@northeastern.edu" style={{ color: 'inherit', textDecoration: 'none' }}>
          burra.sa@northeastern.edu
        </a>
      </div><br />
      <div className="contact-item"> 📱 (857) 339-8482</div>
      <div className="contact-item">
        💼 <a href="https://www.linkedin.com/in/b-sai-kalyan-a14816221/" target="_blank" rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
      </div>
      <div className="contact-item">
        🐙 <a href="https://github.com/Sai9700128" target="_blank" rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
      </div>
      <div className="contact-item">
        📝 <a href="https://medium.com/@saikalyan.burra" target="_blank" rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none' }}>Medium</a>
      </div>
      <div className="contact-item">📍 Boston, MA</div>
    </div>
  </div>
);

export default ContactInfo;