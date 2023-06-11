import React, { useState, useContext } from 'react';
import PasswordField from './PasswordField';
import { FaUnlock } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaRegCopy } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
      className="pb-4"
      style={{ cursor: `${password ? 'pointer' : 'arrow'}` }}
      onClick={handleCopy}
    >
      <div className="flex justify-center mb-10">
        <div className="indicator">
          {/* badge alert display when user copies password */}
          {alert.show && (
            <motion.div
              initial={{ x: 64, y: 10 }}
              animate={{ x: 64, y: 2 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 5,
                duration: 0.15,
              }}
            >
              <span className="indicator-item indicator-bottom indicator-center absolute badge badge-warning p-4">
                <FaRegCopy className="mr-2" />
                Copied!
              </span>
            </motion.div>
          )}
          {password ? (
            <FaLock className="text-9xl text-accent" />
          ) : (
            <FaUnlock className="text-9xl opacity-30" />
          )}
        </div>
      </div>

      {/* display password or placeholder depending on password state */}
      <PasswordField />
    </section>
  );
}

export default PasswordDisplay;
