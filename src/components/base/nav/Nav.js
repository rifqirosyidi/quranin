import React from "react";
import TopNav from "./_TopNav";
import LeftNav from "./_LeftNav";
import RightNav from "./_RightNav";
import BottomNav from "./_BottomNav";

const Nav = ({ rightSidebar, leftSidebar }) => {
  return (
    <>
      <TopNav />
      {leftSidebar && (
        <>
          <div className="hidden md:block">
            <LeftNav />
          </div>
          <div className="md:hidden">
            <BottomNav />
          </div>
        </>
      )}
      {rightSidebar && <RightNav />}
    </>
  );
};

export default Nav;
