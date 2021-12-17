import React from "react";

const Button = ({ children, className, rest }) => {
  return (
    <button
      {...rest}
      className={`${className} font-primary font-medium px-3 py-1 rounded text-white text-shadow tracking-wider bg-gradient-to-r from-emerald-400 to-emerald-300 shadow hover:shadow-md transition duration-500 transform hover:-translate-y-1`}
    >
      {children}
    </button>
  );
};

export default Button;
