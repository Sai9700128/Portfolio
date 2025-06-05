import React from 'react';

const PipelineStage = ({ stage }) => (
  <div className="stage">
    <div className="stage-header">
      <div className="stage-name">{stage.name}</div>
    </div>
    <div className="stage-icon">{stage.icon}</div>
    <div className="stage-status"></div>
    <div className="stage-details">
      {stage.details.map((detail, i) => (
        <div key={i}>{detail}</div>
      ))}
    </div>
  </div>
);

export default PipelineStage;