import React from "react";
import TopNav from "./_TopNav";
import LeftNav from "./_LeftNav";
import RightNav from "./_RightNav";

const Nav = ({ rightSidebar, leftSidebar }) => {
  return (
    <>
      <TopNav />
      {leftSidebar && <LeftNav />}
      {rightSidebar && <RightNav />}
    </>
  );
};

export default Nav;
