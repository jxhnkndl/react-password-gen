import React from 'react';

function PasswordForm() {
  return (
    <section className="py-8">
      {/* password length slider */}
      <div className="form-control px-1 mb-8">
        <p className="mb-3">LENGTH</p>
        <input
          type="range"
          min={8}
          max="100"
          // value="40"
          className="range range-primary transform scale-y-105"
        />
      </div>
      {/* character option toggles */}
      <div className="form-control my-3">
        <label className="label cursor-pointer">
          <span className="">LOWERCASE LETTERS</span>
          <input
            type="checkbox"
            className="toggle h-6 w-12 transform scale-125 mr-1"
          />
        </label>
      </div>
      <div className="form-control my-3">
        <label className="label cursor-pointer">
          <span className="">UPPERCASE LETTERS</span>
          <input
            type="checkbox"
            className="toggle h-6 w-12 transform scale-125 mr-1"
          />
        </label>
      </div>
      <div className="form-control my-3">
        <label className="label cursor-pointer">
          <span className="">NUMBERS</span>
          <input
            type="checkbox"
            className="toggle h-6 w-12 transform scale-125 mr-1"
          />
        </label>
      </div>
      <div className="form-control my-3">
        <label className="label cursor-pointer">
          <span className="">SPECIAL CHARACTERS</span>
          <input
            type="checkbox"
            className="toggle h-6 w-12 transform scale-125 mr-1"
          />
        </label>
      </div>
    </section>
  );
}

export default PasswordForm;
