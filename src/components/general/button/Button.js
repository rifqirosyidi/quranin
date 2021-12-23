import React from "react";
import { variantMap } from "./constant";
import cls from "classnames";

const Button = ({
  children,
  type,
  variant = "primary",
  disabled,
  className,
  rest,
}) => {
  return (
    <button
      type={type}
      className={cls(
        variantMap[variant],
        `${className} font-primary font-medium px-3 py-2 rounded-md tracking-wider hover:shadow-primary transition duration-1000 transform hover:-translate-y-1`
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
