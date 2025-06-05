import { useState, useRef, useEffect } from 'react';

export const useTerminal = () => {
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const addToHistory = (content, type = 'output') => {
    setTerminalHistory(prev => [...prev, { content, type, id: Date.now() }]);
  };

  const clearTerminal = () => {
    setTerminalHistory([]);
  };

  return {
    terminalHistory,
    inputValue,
    setInputValue,
    inputRef,
    terminalBodyRef,
    addToHistory,
    clearTerminal
  };
};