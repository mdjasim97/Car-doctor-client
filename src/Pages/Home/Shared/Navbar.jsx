import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {Link as LinkScroll, ScrollLink} from "react-scroll"
import logo from "../../../assets/icons/logo.png";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  const navItem = (
    <>
      <li className="text-lg font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-bold">
        <Link to="/about">About</Link>
      </li>
      <li className="text-lg font-bold">
        <Link to="/services">Services</Link>
      </li>
      {user?.email ? (
        <>
          <li className="text-lg font-bold">
            <NavLink to="/bookings">My Booking</NavLink>
          </li>
          <li className="text-lg font-bold">
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </>
      ) : (
        <li className="text-lg font-bold">
          <NavLink to="/login">login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div>
            <img src={logo} alt="" />
            <h1 className="text-xl font-bold font-sans ">Car Doctor</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <div className="indicator mr-2">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
          <button className="btn btn-ghost btn-circle mr-2">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-outline text-lg btn-error">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
