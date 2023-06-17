import React, { useEffect, useRef, useContext } from 'react';
import Typewriter from 'typewriter-effect';
import PasswordContext from '../context/PasswordContext';

function PasswordField() {
  const { password } = useContext(PasswordContext);

  // create references to current typewriter instances
  const typewriterTopRef = useRef();
  const typewriterBottomRef = useRef();

  // retrigger typewriter animation each time password state changes
  useEffect(() => {
    let midpoint;
    
    // determine password midpoint
    if (password.length % 2 === 0) {
      midpoint = password.length / 2;
    } else {
      midpoint = Math.floor(password.length / 2) + 1;
    }

    // split long passwords into top and bottom slices
    // set top (<= 16 chars) and bottom passwords (16+ chars)
    const passwordTop = password.slice(0, midpoint);
    const passwordBottom = password.slice(midpoint);

    // if top typewriter has been instantiated
    if (typewriterTopRef.current) {
      // configure instance of typewriter to run onInit()
      const typewriterTop = typewriterTopRef.current;
      typewriterTop.deleteAll();

      // determine what to display in top password field
      if (password && password.length > 16) {
        typewriterTop.typeString(passwordTop).start();
      } else {
        typewriterTop
          .typeString(password ? password : '****************')
          .start();
      }
    }

    // if bottom typewriter has been instantiated
    if (typewriterBottomRef.current) {
      // configure instance of bottom typewriter to run onInit()
      const typewriterBottom = typewriterBottomRef.current;
      typewriterBottom.deleteAll();

      // determine what to display in bottom password field
      if (password && password.length > 16) {
        // calculate animation delay to make sure bottom password doesn't
        // render before top password does
        const delay = midpoint * 100;

        // delete existing bottom password at same time as top password
        typewriterBottom.typeString('').start();

        // don't type bottom password until top password is displayed
        setTimeout(() => {
          typewriterBottom.typeString(passwordBottom).start();
        }, delay);
      } else {
        typewriterBottom.typeString('').start();
      }
    }
  }, [password]);

  return (
    <div className="flex justify-center min-h-16">
      <div className="font-mono text-2xl text-center text-semibold text-accent-content">
        {/* top typewriter instance */}
        <span className="block">
          <Typewriter
            onInit={(typewriter) => {
              // assign this instance of typewriter as the top ref
              // this allows for accessing and manipulating this instance
              // across renders of this component
              typewriterTopRef.current = typewriter;

              // if no password is in state, render the default asterisk string
              if (!password) {
                typewriter.typeString('****************').start();
              }
            }}
            options={{ delay: 35, cursor: '' }}
          />
        </span>
        <span className="block">
          <Typewriter
            onInit={(typewriter) => {
              // assign this instance of typewriter as the bottom ref
              // this allows for accessing and manipulating this instance
              // across renders of this component
              typewriterBottomRef.current = typewriter;
            }}
            options={{ delay: 35, cursor: '' }}
          />
        </span>
      </div>

      {/* long passwords split across two lines
      {password.length > 16 && (
        <span className="block">
          <Typewriter
            onInit={(typewriter) => {
              // assign this instance of typewriter as the bottom ref
              // this allows for accessing and manipulating this instance
              // across renders of this component
              typewriterBottomRef.current = typewriter;
            }}
            options={{ delay: 35, cursor: '' }}
          />
        </span>
      )} */}
    </div>
  );
}

export default PasswordField;
