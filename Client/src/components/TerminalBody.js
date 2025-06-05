import React from 'react';
import './Terminal.css';

const TerminalBody = React.forwardRef(({ children }, ref) => (
  <div className="terminal-body" ref={ref}>
    {children}
  </div>
));

export default TerminalBody;