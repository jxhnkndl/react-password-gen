import React, { useContext } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import ThemeContext from '../context/ThemeContext';

function Header() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  // handle dark/light mode toggle switch
  const handleCheck = (event) => setIsDarkTheme(!isDarkTheme);

  return (
    <header className="px-6 py-6 flex align-center justify-between text-xl text-accent font-semibold">
      <div>
        <FaShieldAlt className="inline text-2xl mr-2" />
        <p className="inline">PASSGEN</p>
      </div>
      <input
        type="checkbox"
        className="toggle toggle-accent"
        onChange={handleCheck}
        checked={isDarkTheme}
      />
    </header>
  );
}

export default Header;
