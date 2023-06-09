import React, { useState, useContext } from 'react';
import PasswordContext from '../context/PasswordContext';

function PasswordForm() {
  const [length, setLength] = useState(8);
  const [options, setOptions] = useState({
    lowercase: false,
    uppercase: false,
    numbers: false,
    specialChars: false,
  });

  const { generatePassword } = useContext(PasswordContext);

  // update length state
  const handleLength = (event) => {
    console.log(event.target.value);
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

  // pass length and password options to password context
  // and generate password
  const handleSubmit = (event) => {
    generatePassword(length, options);
  };

  return (
    <section className="py-8">
      {/* password length */}
      <div className="form-control px-1 mb-8">
        <p className="mb-3">LENGTH</p>
        <input
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={handleLength}
          className="range range-accent transform scale-y-105"
        />
      </div>
      {/* lowercase letters */}
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
      {/* uppercase letters */}
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
      {/* numbers */}
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
      {/* special characters */}
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
      <button className="btn btn-neutral btn-block mt-4" onClick={handleSubmit}>
        Generate Password
      </button>
    </section>
  );
}

export default PasswordForm;
