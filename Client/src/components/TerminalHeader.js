import React from 'react';
import './Terminal.css';

const TerminalHeader = () => (
    <div className="terminal-header">
        <div className="terminal-button red"></div>
        <div className="terminal-button yellow"></div>
        <div className="terminal-button green"></div>
        <div className="terminal-title">sai@devops:~</div>
    </div>
);

export default TerminalHeader;