import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./../pages/Context/ThemeContext";
import DarkModeToggle from "./../utilities/DarkModeToggle";
import logo from "../images/BMRC.png";


const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const userMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        {/* <Link to="/products">Products</Link> */}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {userMenu}
            </ul>
          </div>
          <img src={logo} className="w-14" alt="" />
          {/* <a className="btn btn-ghost normal-case text-xl">Foundation Futuristic Technologies</a> */}
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">{userMenu}</ul>
        </div>

        <div className="navbar-end">
          <DarkModeToggle onToggle={setIsDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;