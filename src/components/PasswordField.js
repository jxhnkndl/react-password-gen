import React, { useContext } from 'react';
import PasswordContext from '../context/PasswordContext';

function PasswordField() {
  const { password } = useContext(PasswordContext);

  let midpoint;

  // determine midpoint of password for display splitting
  if (password.length % 2 === 0) {
    midpoint = password.length / 2;
  } else {
    midpoint = password.length / 2 + 1;
  }

  // split long passwords into top and bottom slices
  let passwordTop = password.slice(0, midpoint);
  let passwordBottom = password.slice(midpoint);

  return (
    <div className="flex justify-center">
      {/* short passwords display on one line */}
      {password.length <= 16 && (
        <p className="font-mono text-2xl text-center text-semibold text-accent-content">
          {password}
        </p>
      )}

      {/* long passwords split across two lines */}
      {password.length > 16 && (
        <p className="font-mono text-2xl text-center text-semibold text-accent-content">
          <span className="block">{passwordTop}</span>
          <span className="block">{passwordBottom}</span>
        </p>
      )}
    </div>
  );
}

export default PasswordField;
