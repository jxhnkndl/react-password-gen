import React from 'react';
import { FaReact } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="px-6 py-3">
      <FaReact className='inline mr-2 mb-1' />
      <p className='inline'>Made with React + Tailwind CSS</p>
    </footer>
  );
}

export default Footer;
