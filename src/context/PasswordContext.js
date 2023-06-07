import { useState, createContext } from 'react';

// init password context
const PasswordContext = createContext();

// export password context provider
export const PasswordProvider = ({ children }) => {
  const [length, setLength] = useState(0);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  return (
    <PasswordContext.Provider
      value={{
        length,
        uppercase,
        lowercase,
        numbers,
        specialChars,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContext;
