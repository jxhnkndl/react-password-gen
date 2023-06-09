import React, { useContext } from 'react';
import { FaUnlock } from 'react-icons/fa';
import PasswordContext from '../context/PasswordContext';

function PasswordDisplay() {
  const { password } = useContext(PasswordContext);

  return (
    <section className="py-8">
      <div className="flex justify-center mb-6">
        <FaUnlock className="text-9xl opacity-30" />
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
