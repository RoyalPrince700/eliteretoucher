import React from "react";
import { FaTasks, FaBook, FaStickyNote } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="flex-1 p-8 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Welcome Back!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 group hover:shadow-xl transform transition-all">
          <div className="flex items-center justify-between">
            <FaTasks className="text-blue-600 text-3xl" />
            <div className="text-blue-300 group-hover:text-blue-600">
              <FiArrowUpRight className="text-xl transition-transform group-hover:scale-125" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-blue-600 mt-4">Manage Tasks</h3>
          <p className="text-sm text-gray-500">Track and organize your assignments and deadlines.</p>
        </div>

        {/* Card 2 */}
        <Link
          to="timetable"
          className="bg-white shadow-lg rounded-lg p-6 group hover:shadow-xl transform transition-all"
        >
          <div className="flex items-center justify-between">
            <FaBook className="text-blue-600 text-3xl" />
            <div className="text-blue-300 group-hover:text-blue-600">
              <FiArrowUpRight className="text-xl transition-transform group-hover:scale-125" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-blue-600 mt-4">Timetable</h3>
          <p className="text-sm text-gray-500">
            Plan your classes and study schedules effectively.
          </p>
        </Link>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 group hover:shadow-xl transform transition-all">
          <div className="flex items-center justify-between">
            <FaStickyNote className="text-blue-600 text-3xl" />
            <div className="text-blue-300 group-hover:text-blue-600">
              <FiArrowUpRight className="text-xl transition-transform group-hover:scale-125" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-blue-600 mt-4">Notepad</h3>
          <p className="text-sm text-gray-500">Jot down notes and ideas during your classes.</p>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
