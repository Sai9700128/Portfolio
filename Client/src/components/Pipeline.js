import React from 'react';
import PipelineStage from './PipeLineStage';
import './Pipeline.css';

const Pipeline = () => {
  const stages = [
    {
      name: 'Source',
      icon: '📦',
      details: ['GitHub', 'Spring Boot', 'Microservices']
    },
    {
      name: 'Build',
      icon: '🔨',
      details: ['Packer AMI', 'Docker Images', 'Maven/Gradle']
    },
    {
      name: 'Test',
      icon: '🧪',
      details: ['TDD', 'Security Scan', '99% Uptime']
    },
    {
      name: 'Deploy',
      icon: '🚀',
      details: ['ECS Fargate', 'Route 53', 'ALB']
    },
    {
      name: 'Monitor',
      icon: '📊',
      details: ['CloudWatch', 'Prometheus', 'ElasticSearch']
    }
  ];

  return (
    <div className="pipeline-section">
      <h2 className="pipeline-title">CI/CD Pipeline Projects</h2>
      <div className="pipeline">
        {stages.map((stage, i) => (
          <PipelineStage key={i} stage={stage} />
        ))}
      </div>
    </div>
  );
};

export default Pipeline;