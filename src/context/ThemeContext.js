import { useState, createContext } from 'react';

// init theme context
const ThemeContext = createContext();

// export theme context provider
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;