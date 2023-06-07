import { useState, createContext } from 'react';

// init password context
const PasswordContext = createContext();

// export password context provider
export const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState(0);

  // create password
  const generatePassword = (length, options) => {
    console.log(length);
    console.log(options);
  }

  return (
    <PasswordContext.Provider
      value={{
        password,
        generatePassword
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContext;
