import React from "react";
import cls from "classnames";
import Nav from "./nav/Nav";

const Layout = ({ children, rightSidebar = false, leftSidebar = true }) => {
  return (
    <div className="bg-secondary text-primary min-h-screen text-gray-700 dark:bg-gray-800 dark:text-gray-200">
      <Nav rightSidebar={rightSidebar} leftSidebar={leftSidebar} />
      <main
        className={cls(`pt-24 container mx-auto`, {
          "pr-60": rightSidebar,
          "pl-10": leftSidebar,
        })}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
