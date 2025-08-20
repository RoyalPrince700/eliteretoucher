import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaBell, FaBook, FaTasks } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import LOGO from "../assets/logosaas.png";

export const NavBarNew = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-white shadow-md">
      <div className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/">
              <div className="flex items-center gap-2">
                <img src={LOGO} alt="Logo" className="h-10 w-10" />
                <h1 className="text-xl font-semibold text-blue-600">
                  TaskMate
                </h1>
              </div>
            </Link>

            {/* Mobile Menu Icon */}
            <FiMenu className="w-6 h-6 md:hidden cursor-pointer text-gray-700" />

            {/* Navigation Section */}
            <nav className="hidden md:flex gap-6 items-center">
              <Link
                to="/tasks"
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <FaTasks />
                Tasks
              </Link>
              <Link
                to="/timetable"
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <FaBook />
                Timetable
              </Link>
              <Link
                to="/notes"
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <FaBook />
                Notes
              </Link>
              <Link
                to="/reminders"
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <FaBell />
                Reminders
              </Link>
              <Link
                to="/study-mode"
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <FaBook />
                Study Mode
              </Link>
              <Link
                to="/profile"
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <BsPerson />
                Profile
              </Link>
              <Link
                to="/signin"
                className="bg-blue-600 tracking-tight px-4 py-2 inline-flex items-center rounded-lg text-white font-medium hover:bg-blue-700"
              >
                Sign Out
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBarNew;
