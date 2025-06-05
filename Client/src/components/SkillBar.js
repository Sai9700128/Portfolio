import React from 'react';
import './Cards.css';

const SkillBar = ({ skill }) => (
  <div className="project-card">
    <div className="highlight">{skill.category}</div>
    <div>
      <span className="success">{skill.name}</span>
      <span style={{ float: 'right' }}>{skill.visualBar} {skill.percentage}%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
    </div>
    {skill.details && (
      <div style={{ fontSize: '12px', color: '#8892b0', marginTop: '5px' }}>
        {skill.details}
      </div>
    )}
  </div>
);

export default SkillBar;