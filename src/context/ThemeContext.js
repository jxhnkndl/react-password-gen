import { useState, useEffect, createContext } from 'react';

// init theme context
const ThemeContext = createContext();

// export theme context provider
export const ThemeProvider = ({ children }) => {
  // get user's last saved theme preference
  const initialTheme = JSON.parse(localStorage.getItem('savedTheme'));

  // launch app using user's last saved theme preference
  const [isDarkTheme, setIsDarkTheme] = useState(initialTheme);

  // save user's last theme preference
  useEffect(() => {
    JSON.stringify(localStorage.setItem('savedTheme', isDarkTheme));
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;