import React, { useState, useContext } from 'react';
import { FaUnlock } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaRegCopy } from 'react-icons/fa';
import PasswordContext from '../context/PasswordContext';

function PasswordDisplay() {
  const [alert, setAlert] = useState({
    show: false,
    msg: 'Password copied!',
  });

  const { password } = useContext(PasswordContext);

  // copy password from ui when user taps/clicks display
  const handleCopy = async () => {
    if (password) {
      try {
        await navigator.clipboard.writeText(password);
        console.log(`Copied Password: ${password}`);

        setAlert({
          ...alert,
          show: true,
        });

        setTimeout(() => setAlert({ show: false }), 3000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section
      className="py-8"
      style={{ cursor: `${password ? 'pointer' : 'arrow'}` }}
      onClick={handleCopy}
    >
      <div className="flex justify-center mb-10">
        <div className="indicator">
          {/* badge alert display when user copies password */}
          {alert.show && (
            <span className="indicator-item indicator-top indicator-end absolute right-[-30px] top-[-15px] badge badge-warning">
              <FaRegCopy className="mr-2" />
              Copied!
            </span>
          )}
          {password ? (
            <FaLock className="text-9xl text-accent" />
          ) : (
            <FaUnlock className="text-9xl opacity-30" />
          )}
        </div>
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
