import React, { createContext, useState } from 'react';

const initialValues = {
  darkMode: false,
};

export const Theme = createContext(initialValues);

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(false);
  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
};
