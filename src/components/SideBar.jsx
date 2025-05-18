import React from 'react'
import { FaHome, FaChartBar, FaHotel, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SidebarItem from './SidebarItem';

export default function SideBar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-md fixed top-0 left-0 flex flex-col justify-between z-10">
      <div>
        
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-red-600">MDG Admin</h1>
          <p className="text-sm text-gray-400">Beni Mellal – Khénifra</p>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <SidebarItem to="/dashboard" icon={<FaHome />} label="Dashboard" />
          <SidebarItem to="/listings" icon={<FaHotel />} label="Listings" />
          <SidebarItem to="/users" icon={<FaUsers />} label="Users" />
          <SidebarItem to="/reports" icon={<FaChartBar />} label="Reports" />
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="p-6 border-t border-gray-200">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
