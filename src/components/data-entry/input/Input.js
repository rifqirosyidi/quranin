import React from "react";

const Input = ({ field, form, ...rest }) => {
  return (
    <input
      className="font-primary w-full text-sm text-primary bg-primary px-4 py-3 rounded-md"
      {...field}
      {...rest}
    />
  );
};

export default Input;
