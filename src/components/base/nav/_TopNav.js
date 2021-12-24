import React, { useContext, useState } from "react";
import cls from "classnames";
import { Link } from "gatsby";
import {
  FaBars,
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
  const userLocal =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user")) || false
      : null;

  console.log(userLocal);
  const { getUser, signOut } = useFirebaseContext();
  const user = getUser();

  const [isListening, setIsListening] = useContext(ListeningModeContext);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const [isMobileDropdown, setIsMobileDropdown] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdown((prev) => !prev);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdown((prev) => !prev);
  };

  const profileTransition = useTransition(isProfileDropdown, {
    initial: null,
    from: { opacity: 0, x: 230 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 230 },
    reverse: isProfileDropdown,
    delay: 200,
    config: config.molasses,
    onRest: () => {
      setIsProfileDropdown((prev) => !prev);
    },
  });

  const mobileProfileTransition = useTransition(isMobileDropdown, {
    initial: null,
    from: { opacity: 0, y: -230 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -230 },
    reverse: isMobileDropdown,
    delay: 200,
    config: config.molasses,
    onRest: () => {
      setIsMobileDropdown((prev) => !prev);
    },
  });

  const searchTransition = useTransition(isComponentVisible, {
    initial: null,
    from: { opacity: 0, y: "-100vh", rotateY: 20, skewY: 5 },
    enter: { opacity: 1, y: "0", rotateY: 0, skewY: 0 },
    leave: { opacity: 0, y: "100vh", rotateY: -20, skewY: 5 },
    reverse: isComponentVisible,
    delay: 200,
    config: config.molasses,
    onRest: () => {
      setIsComponentVisible((prev) => !prev);
    },
  });

  return (
    <div>
      <div className="hidden md:flex fixed left-0 top-0 right-0 h-16 shadow-none items-center bg-primary text-primary z-50">
        <div className="flex container mx-auto items-center justify-between w-full ">
          <div className="flex space-x-4 mr-8 items-center">
            <p className="font-primary text-gray-700 font-bold text-xl w-9 h-9 bg-emerald-300 rounded-xl mr-8"></p>
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
                className="flex  items-center justify-between w-full font-primary bg-secondary  text-gray-700 placeholder-gray-400 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
            {user ? (
              <div className="relative">
                <button
                  onClick={() => toggleProfileDropdown()}
                  className="font-primary h-16 flex items-center"
                >
                  {user?.displayName}
                </button>

                {profileTransition(
                  (styles, item) =>
                    item && (
                      <animated.div
                        style={styles}
                        className="absolute right-0 -mr-10"
                      >
                        <div className="w-56 bg-primary font-primary text-secondary shadow-none rounded-b-md p-6 flex flex-col space-y-4">
                          <Link
                            to="/authenticate/profile"
                            className="flex items-center space-x-3"
                          >
                            <p>profile</p>
                          </Link>
                          <Link
                            to="/authenticate/settings"
                            className="flex items-center space-x-3"
                          >
                            <FaCog /> <p>settings</p>
                          </Link>
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
                  to="/authenticate/login"
                  className="font-primary text-sm text-secondary hover:text-primary"
                >
                  Masuk
                </Link>
                <Link
                  to="/authenticate/register"
                  className="font-primary text-sm text-secondary hover:text-primary"
                >
                  Daftar
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div className="fixed md:hidden h-16 bg-primary w-full z-50 shadow-sm">
        <div className="relative ">
          <div className="flex items-center justify-between px-8 h-16 w-full">
            <div>
              <p className="font-primary font-medium">quranin</p>
            </div>
            <div className="flex items-center space-x-6">
              <button onClick={() => setIsComponentVisible((prev) => !prev)}>
                <FaSearch className="text-secondary" />
              </button>
              <ThemeToggle />
              <button onClick={toggleMobileDropdown}>
                <FaBars className="text-secondary" />
              </button>
            </div>
          </div>

          <div className="absolute top-0 rounded-bl-xl right-0 mt-16 z-50">
            <div className="flex flex-col space-y-4 w-56">
              {user ? (
                <>
                  {mobileProfileTransition(
                    (styles, item) =>
                      item && (
                        <animated.div
                          style={styles}
                          className="bg-primary p-4 flex flex-col space-y-4 text-secondary rounded-bl-xl"
                        >
                          <Link to="/authenticate/profile">
                            <div className="font-primary">Profile</div>
                          </Link>
                          <Link to="/authenticate/settings">
                            <div className="flex space-x-2 items-center font-primary">
                              <FaCog /> <p>Settings</p>
                            </div>
                          </Link>
                          <button
                            onClick={signOut}
                            className="flex space-x-2 items-center font-primary"
                          >
                            <FaSignOutAlt />
                            <p>Logout</p>
                          </button>
                        </animated.div>
                      )
                  )}
                </>
              ) : (
                <>
                  {mobileProfileTransition(
                    (styles, item) =>
                      item && (
                        <animated.div
                          style={styles}
                          className="bg-primary p-4 flex flex-col space-y-4 text-secondary rounded-bl-xl"
                        >
                          <Link
                            to="/authenticate/login"
                            className="font-primary"
                          >
                            Login
                          </Link>
                          <Link
                            to="/authenticate/register"
                            className="font-primary"
                          >
                            Register
                          </Link>
                        </animated.div>
                      )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {searchTransition(
        (styles, item) => item && <Search style={styles} searchRef={ref} />
      )}
    </div>
  );
};

export default TopNav;
