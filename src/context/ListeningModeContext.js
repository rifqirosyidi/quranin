import React, { useState, createContext } from "react";

export const ListeningModeContext = createContext();

export const ListeningModeProvider = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  return (
    <ListeningModeContext.Provider value={[isListening, setIsListening]}>
      {children}
    </ListeningModeContext.Provider>
  );
};
