import React, { useState } from 'react';

const Input = ({ label, type = 'text',name, placeholder ,...rest}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
        name={name}
          type={isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...rest}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-3 flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            {isPasswordVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.475 12.475C12.488 13.462 11.293 14 10 14s-2.488-.538-3.475-1.525A4.988 4.988 0 013 10c0-1.293.538-2.488 1.525-3.475C5.512 5.538 6.707 5 8 5s2.488.538 3.475 1.525A4.988 4.988 0 0117 10c0 1.293-.538 2.488-1.525 3.475z" />
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
