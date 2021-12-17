import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../../hooks/useDarkMode";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <button className="text-gray-500" onClick={() => setIsDark(!isDark)}>
      {isDark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
    </button>
  );
};

export default ThemeToggle;
