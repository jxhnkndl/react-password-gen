import { useState, createContext } from 'react';

// init password context
const PasswordContext = createContext();

// export password context provider
export const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState(0);

  return (
    <PasswordContext.Provider
      value={{
        password,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContext;
