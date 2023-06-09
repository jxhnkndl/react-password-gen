import React, { useContext } from 'react';
import { FaUnlock } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import PasswordContext from '../context/PasswordContext';

function PasswordDisplay() {
  const { password } = useContext(PasswordContext);

  // copy password from ui when user taps/clicks display
  const handleCopy = async () => {
    if (password) {
      try {
        await navigator.clipboard.writeText(password);
        console.log(`Copied Password: ${password}`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section className="py-8" onClick={handleCopy}>
      <div className="flex justify-center mb-10">
        {password ? (
          <FaLock className="text-9xl text-accent" />
        ) : (
          <FaUnlock className="text-9xl opacity-30" />
        )}
      </div>
      {/* display password or placeholder depending on password state */}
      <div className="flex justify-center">
        {password ? (
          <p className="text-2xl text-center text-semibold text-accent-content">
            {password}
          </p>
        ) : (
          <p className="text-2xl text-center opacity-30">*** PASSWORD ***</p>
        )}
      </div>
    </section>
  );
}

export default PasswordDisplay;
