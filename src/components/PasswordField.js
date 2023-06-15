import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
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
      {/* placeholder text */}
      {!password && (
        <p className="font-mono text-2xl text-center text-semibold text-accent-content">
          <Typewriter
            onInit={(typewriter) => {
              setTimeout(() => {
                typewriter.typeString('***************').start();
              }, 200)
            }}
            options={{ delay: 35, cursor: '' }}
          />
        </p>
      )}

      {/* short passwords display on one line */}
      {password.length > 0 && password.length <= 16 && (
        <p className="font-mono text-2xl text-center text-semibold text-accent-content">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.deleteAll().typeString(password).start();
            }}
            options={{ delay: 35, cursor: '' }}
          />
        </p>
      )}

      {/* long passwords split across two lines */}
      {password.length > 16 && (
        <p className="font-mono text-2xl text-center text-semibold text-accent-content">
          <span className="block">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.deleteAll().typeString(passwordTop).start();
              }}
              options={{ delay: 35, cursor: '' }}
            />
          </span>
          <span className="block">
            <Typewriter
              onInit={(typewriter) => {
                const delay = midpoint * 50;
                typewriter.deleteAll();

                setTimeout(() => {
                  typewriter.typeString(passwordBottom).start();
                }, delay);
              }}
              options={{ delay: 35, cursor: '' }}
            />
          </span>
        </p>
      )}
    </div>
  );
}

export default PasswordField;
