import React, { useContext } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import ThemeContext from '../context/ThemeContext';

function Header() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  let toggleText;

  // set toggle switch label based on theme state
  isDarkTheme ? (toggleText = 'Dark') : (toggleText = 'Light');

  // handle dark/light mode toggle switch
  const handleCheck = (event) => setIsDarkTheme(!isDarkTheme);

  return (
    <header className="px-6 py-6 flex items-center justify-between text-xl text-accent font-semibold">
      <div className='flex items-center'>
        <FaShieldAlt className="inline text-2xl mr-2" />
        <p className={`mb-0 inline ${!isDarkTheme && 'text-neutral'}`}>
          PASSGEN
        </p>
      </div>
      <div className="form-control">
        <label className="label">
          <span
            className={`text-sm mr-2 ${
              isDarkTheme ? 'text-base-content' : 'text-neutral'
            }`}
          >
            {toggleText}
          </span>
          <input
            type="checkbox"
            className="toggle toggle-accent"
            onChange={handleCheck}
            checked={isDarkTheme}
          />
        </label>
      </div>
    </header>
  );
}

export default Header;
