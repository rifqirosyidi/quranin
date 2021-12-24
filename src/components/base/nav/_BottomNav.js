import { Link } from "gatsby";
import React from "react";
import {
  FaBook,
  FaChartBar,
  FaDoorOpen,
  FaHeart,
  FaHome,
} from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 z-50 bg-primary w-full h-16">
      <div className="flex items-center justify-around h-16 text-secondary">
        <Link to="/" activeClassName="text-emerald-500">
          <FaHome />
        </Link>
        <Link to="/surat" activeClassName="text-emerald-500">
          <FaBook />
        </Link>
        <Link to="/favorit" activeClassName="text-emerald-500">
          <FaHeart />
        </Link>
        <Link to="/jelajah" activeClassName="text-emerald-500">
          <FaDoorOpen />
        </Link>
        <Link to="/statistik" activeClassName="text-emerald-500">
          <FaChartBar />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
