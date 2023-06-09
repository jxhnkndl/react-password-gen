import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

function Header() {
  return (
    <header className="px-6 py-6 flex align-center text-xl text-accent font-semibold">
      <FaShieldAlt className="inline text-2xl mr-2" />
      <p className='inline'>PASSGEN</p>
    </header>
  );
}

export default Header;
