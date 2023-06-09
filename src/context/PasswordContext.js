import { useState, createContext } from 'react';
import {
  lowercase,
  uppercase,
  numbers,
  specialChars,
} from '../utils/charTypes';

// init password context
const PasswordContext = createContext();

// export password context provider
export const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState('');

  // create password
  const generatePassword = (length, options) => {
    let charChoices = '';
    let passwordChars = '';

    // concatenate final char choices based on options
    if (options.lowercase) charChoices = charChoices + lowercase;
    if (options.uppercase) charChoices = charChoices + uppercase;
    if (options.numbers) charChoices = charChoices + numbers;
    if (options.specialChars) charChoices = charChoices + specialChars;

    // generate password from final char string
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charChoices.length);
      let nextChar = charChoices[randomIndex];

      passwordChars = passwordChars + nextChar;
    }

    setPassword(passwordChars);
  };

  // clear password from state
  const clearPassword = () => {
    setPassword('');
  }

  return (
    <PasswordContext.Provider
      value={{
        password,
        generatePassword,
        clearPassword
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContext;
