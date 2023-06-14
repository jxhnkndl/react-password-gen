import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import PasswordContext from '../context/PasswordContext';

function PasswordForm() {
  const [length, setLength] = useState(8);
  const [options, setOptions] = useState({
    lowercase: false,
    uppercase: false,
    numbers: false,
    specialChars: false,
  });
  const [validOptions, setValidOptions] = useState(false);

  const { password, generatePassword, clearPassword } =
    useContext(PasswordContext);

  // update length state
  const handleLength = (event) => {
    setLength(event.target.value);
  };

  // update options state through toggle switches
  const handleCheck = (event) => {
    const { name, checked } = event.target;

    setOptions({
      ...options,
      [name]: checked,
    });
  };

  // check whether user has selected at least one character type
  useEffect(() => {
    const areValidOptions = Object.values(options).some(
      (option) => option !== false
    );

    if (areValidOptions) {
      setValidOptions(true);
    } else {
      setValidOptions(false);
    }
  }, [options]);

  // pass length and password options to password context
  // and generate password
  const handleSubmit = (event) => {
    generatePassword(length, options);
  };

  // reset password options and clear password from ui
  const handleClear = () => {
    setLength(8);
    setOptions({
      lowercase: false,
      uppercase: false,
      numbers: false,
      specialChars: false,
    });
    clearPassword('');
  };

  return (
    <section className="pt-4 pb-8">
      <div className="card bg-base-300 shadow-xl px-4 py-6">
        {/* password length */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-control px-1 mb-8">
            <div className="flex justify-between mb-3">
              <p>LENGTH</p>
              <p>{length} Characters</p>
            </div>
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={handleLength}
              className="range range-accent transform scale-y-105"
            />
          </div>
        </motion.div>
        {/* lowercase letters */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="form-control my-3">
            <label className="label cursor-pointer">
              <span className="">LOWERCASE LETTERS</span>
              <input
                name="lowercase"
                type="checkbox"
                className="toggle toggle-accent h-6 w-12 transform scale-125 mr-1"
                checked={options.lowercase}
                onChange={handleCheck}
              />
            </label>
          </div>
        </motion.div>
        {/* uppercase letters */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="form-control my-3">
            <label className="label cursor-pointer">
              <span className="">UPPERCASE LETTERS</span>
              <input
                name="uppercase"
                type="checkbox"
                className="toggle toggle-accent h-6 w-12 transform scale-125 mr-1"
                checked={options.uppercase}
                onChange={handleCheck}
              />
            </label>
          </div>
        </motion.div>
        {/* numbers */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="form-control my-3">
            <label className="label cursor-pointer">
              <span className="">NUMBERS</span>
              <input
                name="numbers"
                type="checkbox"
                className="toggle toggle-accent h-6 w-12 transform scale-125 mr-1"
                checked={options.numbers}
                onChange={handleCheck}
              />
            </label>
          </div>
        </motion.div>
        {/* special characters */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="form-control my-3">
            <label className="label cursor-pointer">
              <span className="">SPECIAL CHARACTERS</span>
              <input
                name="specialChars"
                type="checkbox"
                className="toggle toggle-accent h-6 w-12 transform scale-125 mr-1"
                checked={options.specialChars}
                onChange={handleCheck}
              />
            </label>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            disabled={!validOptions && 'disabled'}
            className={`btn btn-block mt-4 ${validOptions && 'btn-accent'}`}
            onClick={handleSubmit}
          >
            Generate Password
          </button>
        </motion.div>
        {password && (
          <button
            className="btn btn-neutral btn-block mt-4"
            onClick={handleClear}
          >
            Clear Password
          </button>
        )}
      </div>
    </section>
  );
}

export default PasswordForm;
