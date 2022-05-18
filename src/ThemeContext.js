import React, { createContext, useState } from 'react';

const initialValues = {
  darkMode: false,
};

export const Theme = createContext(initialValues);

export const ThemeContext = ({ children }) => {
  const [dark, setTheme] = useState(false);
  return <Theme.Provider value={{ dark, setTheme }}>{children}</Theme.Provider>;
};
