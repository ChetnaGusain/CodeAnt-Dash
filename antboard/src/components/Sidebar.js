import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa';
import { IoIosCloudOutline } from 'react-icons/io';
import { FaBook } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { IoCallOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Sidebar = ({ handleLogout }) => {
  return (
<div className="SidebarNavigation w-60 h-full bg-white border-r border-gray-200 flex flex-col justify-between">
{/* Header Section */}
      <div className="Header px-5 pt-6 h-40">
        <div className="flex items-center space-x-2">
          <img 
            src="./codeant_ai_logo.jpeg" 
            alt="CodeAnt Logo" 
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-2xl font-semibold text-gray-900">CodeAnt AI</h1>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <div className="InputField mt-1 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm">
            <span className="text-gray-900">UtkarshDhairyaPanwar</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="Navigation mt-4 space-y-2 h-40">
          {[
            { label: "Repositories", icon: <IoHomeOutline />, active: true },
            { label: "AI Code Review", icon: <FaCode /> },
            { label: "Cloud Security", icon: <IoIosCloudOutline /> },
            { label: "How to Use", icon: <FaBook /> },
            { label: "Settings", icon: <CiSettings /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`NavItemBase px-3 py-2 rounded-md flex items-center gap-2 ${
                item.active ? "bg-blue-600 text-white" : "bg-white text-gray-700"
              }`}
            >
              {item.icon && <span className="text-xl">{item.icon}</span>}
              <span className="font-semibold text-base">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer Section */}
      <footer className="Footer px-4 pb-6 space-y-2 h-40">
        <div className='NavItemBase px-3 py-2 rounded-md bg-white text-gray-700 flex items-center gap-2'>
            <span className='text-xl'><IoCallOutline/></span>
            <span className='font-semibold text-base'>Support</span>
        </div>
        <div
          className="NavItemBase px-3 py-2 rounded-md bg-white text-gray-700 flex items-center gap-2"
          onClick={handleLogout} // handleLogout ko Logout button se attach
        >
          <span className="text-xl"><FiLogOut /></span>
          <span className="font-semibold text-base">Logout</span>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
