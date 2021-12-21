import { Link } from "gatsby";
import React from "react";
import {
  FaBook,
  FaChartBar,
  FaDoorOpen,
  FaHeart,
  FaHome,
} from "react-icons/fa";

const LeftNav = () => {
  return (
    <div className="fixed top-0 w-16 text-gray-700 min-h-screen">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col space-y-5 items-center justify-between">
          <Link
            to="/"
            className="text-gray-500 p-2 border-2 border-transparent rounded-md hover:text-emerald-500 transition duration-1000"
            activeClassName="text-emerald-700 bg-emerald-300 shadow-md"
          >
            <FaHome className="text-lg" />
          </Link>
          <Link
            to="/surat"
            className="text-gray-500 p-2 border-2 border-transparent rounded-md hover:text-emerald-500 transition duration-1000"
            activeClassName="text-emerald-700 bg-emerald-300 shadow-md"
          >
            <FaBook className="text-lg" />
          </Link>
          <Link
            to="/favorit"
            className="text-gray-500 p-2 border-2 border-transparent rounded-md hover:text-emerald-500 transition duration-1000"
            activeClassName="text-emerald-700 bg-emerald-300 shadow-md"
          >
            <FaHeart className="text-lg" />
          </Link>
          <Link
            to="/jelajah"
            className="text-gray-500 p-2 border-2 border-transparent rounded-md hover:text-emerald-500 transition duration-1000"
            activeClassName="text-emerald-700 bg-emerald-300 shadow-md"
          >
            <FaDoorOpen className="text-lg" />
          </Link>
          <Link
            to="/statistik"
            className="text-gray-500 p-2 border-2 border-transparent rounded-md hover:text-emerald-500 transition duration-1000"
            activeClassName="text-emerald-700 bg-emerald-300 shadow-md"
          >
            <FaChartBar className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
