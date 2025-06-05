export const parseCommand = (input) => {
    const trimmed = input.trim().toLowerCase();
    const parts = trimmed.split(' ');
    return {
      command: parts[0],
      args: parts.slice(1)
    };
  };
  
  export const getCommandSuggestions = (input, availableCommands) => {
    const currentValue = input.toLowerCase();
    return availableCommands.filter(cmd => cmd.startsWith(currentValue));
  };