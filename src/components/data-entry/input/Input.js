import React from "react";
import cls from "classnames";
import { bgMap } from "./constant";

const Input = ({ field, bg = "primary", label, form, ...rest }) => {
  return (
    <>
      {label && <p className="font-primary font-medium mt-4 mb-2">{label}</p>}
      <input
        className={cls(
          bgMap[bg],
          "font-primary w-full text-sm text-primary px-4 py-3 rounded-xl"
        )}
        {...field}
        {...rest}
      />
    </>
  );
};

export default Input;
