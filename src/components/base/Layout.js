import React from "react";
import cls from "classnames";
import Nav from "./nav/Nav";

const Layout = ({ children, rightSidebar = false, leftSidebar = true }) => {
  return (
    <div className="bg-secondary text-primary min-h-screen text-gray-700 dark:bg-gray-800 dark:text-gray-200">
      <Nav rightSidebar={rightSidebar} leftSidebar={leftSidebar} />
      <main
        className={cls(
          `pt-24 md:container w-min-screen md:container md:mx-auto mx-4 pb-24`,
          {
            "pr-0 md:pr-60": rightSidebar,
            "pl-0 md:pl-10": leftSidebar,
          }
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
