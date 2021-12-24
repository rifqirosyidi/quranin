import React from "react";
import { variantMap } from "./constant";
import cls from "classnames";

const Button = ({
  children,
  type,
  variant = "primary",
  disabled,
  withHoverEffect = true,
  onClick,
  className,
  rest,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls(
        variantMap[variant],
        `${className} ${
          withHoverEffect &&
          "hover:shadow-primary transition duration-1000 transform hover:-translate-y-1"
        } font-primary font-medium px-3 py-2 rounded-md tracking-wider `
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
