import React from 'react';
import './Cards.css';

const ProjectCard = ({ project }) => (
  <div className={`project-card ${project.isSecret ? 'secret' : ''}`}>
    <div className="success">{project.title}</div>
    {project.status && <div className="warning">{project.status}</div>}
    {project.subtitle && <div style={{ marginTop: '10px' }}>{project.subtitle}</div>}
    {project.description && <div style={{ marginTop: '10px' }}>{project.description}</div>}
    {project.techStack && (
      <div className="tech-stack">
        {project.techStack.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
    )}
    {project.details && (
      <div style={{ marginTop: '10px', color: '#8892b0' }}>
        {project.details.map((detail, i) => (
          <div key={i}>• {detail}</div>
        ))}
      </div>
    )}
  </div>
);

export default ProjectCard;