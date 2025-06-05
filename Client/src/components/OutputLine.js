import React from 'react';
import './Commands.css';

const OutputLine = ({ prompt, command }) => (
  <div className="output-line">
    <span className="prompt">{prompt}</span> <span className="command">{command}</span>
  </div>
);

export default OutputLine;