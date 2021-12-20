import React from "react";

const Button = ({ children, type, className, rest }) => {
  return (
    <button
      type={type}
      className={`${className} font-primary font-medium px-3 py-1 rounded text-white text-shadow tracking-wider bg-gradient-to-r from-emerald-400 to-emerald-300 shadow hover:shadow-md transition duration-500 transform hover:-translate-y-1`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
