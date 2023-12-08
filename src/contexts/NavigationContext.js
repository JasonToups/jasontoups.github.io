// NavigationContext.js
import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('/');

  const setPath = (newPath) => {
    setCurrentPath(newPath);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, setPath }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return useContext(NavigationContext);
};
