import React, { useContext, useState } from "react";
import cls from "classnames";
import { Link } from "gatsby";
import {
  FaBell,
  FaCog,
  FaHeadphonesAlt,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";
import { ListeningModeContext } from "../../../context/ListeningModeContext";
import Search from "../search/Search";
import useComponentVisible from "../../../hooks/useComponentVisible";
import { config, useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useFirebaseContext } from "../../../context/FirebaseContext";

const TopNav = () => {
  const { getUser, signOut } = useFirebaseContext();
  const user = getUser();
  const userLocal = JSON.parse(localStorage.getItem("user")) || false;

  const [isListening, setIsListening] = useContext(ListeningModeContext);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [isProfileDropdown, setIsProfileDropdown] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdown((prev) => !prev);
  };

  const transitions = useTransition(isProfileDropdown, {
    initial: null,
    from: { opacity: 0, x: 230 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 230 },
    reverse: isProfileDropdown,
    delay: 200,
    config: config.molasses,
    onRest: () => setIsProfileDropdown((prev) => !prev),
  });

  return (
    <div>
      <div className="fixed left-0 top-0 right-0 h-16 shadow-sm flex items-center bg-primary text-primary z-50">
        <div className="flex items-center justify-between w-full ml-4 mr-10">
          <div className="flex space-x-4 mr-8 items-center">
            <p className="font-primary text-gray-700 font-bold text-xl w-9 h-9 bg-emerald-300 rounded-md mr-8"></p>
            <p className="font-primary font-bold text-xl">quran</p>
            <p className="font-primary text-secondary font-medium text-xl ">
              hadits
            </p>
          </div>
          <div className="flex items-center space-x-8">
            <button
              className={cls(`p-2 rounded`, {
                "bg-emerald-300 shadow": isListening,
              })}
              onClick={() => setIsListening(!isListening)}
            >
              {isListening ? (
                <FaHeadphonesAlt className="text-emerald-700 text-lg" />
              ) : (
                <FaHeadphonesAlt className="text-gray-500 text-lg" />
              )}
            </button>

            <div className="w-72">
              <button
                onClick={() => setIsComponentVisible(true)}
                type="button"
                className="flex  items-center justify-between w-full font-primary bg-secondary  text-gray-700 placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <div className="flex items-center space-x-4">
                  <FaSearch className="text-gray-500" />
                  <p className="font-primary text-gray-400">Search</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="font-primary border-b-2 border-gray-400 text-secondary font-medium text-sm bg-primary rounded-sm px-2">
                    Ctrl
                  </p>
                  <p className="font-primary border-b-2 border-gray-400 text-secondary font-medium text-sm bg-primary rounded-sm px-2">
                    K
                  </p>
                </div>
              </button>
            </div>

            <FaBell className="text-gray-500 text-lg" />
            <ThemeToggle />
            {userLocal ? (
              <div className="relative">
                <button
                  onClick={() => toggleProfileDropdown()}
                  className="font-primary h-16 flex items-center"
                >
                  {user?.displayName}
                </button>

                {transitions(
                  (styles, item) =>
                    item && (
                      <animated.div
                        style={styles}
                        className="absolute right-0 -mr-10"
                      >
                        <div className="w-56 bg-primary font-primary text-secondary shadow-sm rounded-b-md p-6 flex flex-col space-y-4">
                          <button className="flex items-center space-x-3">
                            <p>profile</p>
                          </button>
                          <button className="flex items-center space-x-3">
                            <FaCog /> <p>settings</p>
                          </button>
                          <button
                            onClick={signOut}
                            className="flex items-center space-x-3"
                          >
                            <FaSignOutAlt /> <p>logout</p>
                          </button>
                        </div>
                      </animated.div>
                    )
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-primary text-sm text-secondary hover:text-primary"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="font-primary text-sm text-secondary hover:text-primary"
                >
                  Daftar
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {isComponentVisible && <Search searchRef={ref} />}
    </div>
  );
};

export default TopNav;
