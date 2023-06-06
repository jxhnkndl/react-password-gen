import React from 'react';
import { FaUnlock } from 'react-icons/fa';

function PasswordDisplay() {
  return (
    <section className="py-8">
      <div className='flex justify-center mb-6'>
        <FaUnlock className='text-9xl opacity-30' />
      </div>
      <div className='flex justify-center'>
        <p className='text-2xl text-center opacity-30'>
          ** PASSWORD **
        </p>
      </div>
    </section>
  );
}

export default PasswordDisplay;
