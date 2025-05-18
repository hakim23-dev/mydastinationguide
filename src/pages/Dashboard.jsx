import React from 'react'
import { useState } from "react";

import {
  FaHotel,
  FaUsers,
  FaStar,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import SideBar from '../components/SideBar';

const stats = [
  { label: "Total Listings", value: 24, icon: <FaHotel /> },
  { label: "Total Users", value: 152, icon: <FaUsers /> },
  { label: "Reviews", value: 483, icon: <FaStar /> },
];

const recentActivities = [
  { id: 1, text: "Fatima posted a review for Borj Des Cascades." },
  { id: 2, text: "New user registered: Amine B." },
  { id: 3, text: "Hotel Sunset listing updated." },
];

const listings = [
  { id: 1, name: "Borj Des Cascades", type: "Hotel", rating: 4.8 },
  { id: 2, name: "Sprig Of Coffee", type: "Café", rating: 4.5 },
  { id: 3, name: "Bin El Ouidane Lake", type: "Activity", rating: 4.7 },
];

const chartData = [
  { name: "Jan", reviews: 80 },
  { name: "Feb", reviews: 120 },
  { name: "Mar", reviews: 95 },
  { name: "Apr", reviews: 160 },
  { name: "May", reviews: 130 },
];

export default function Dashboard() {
    const [items, setItems] = useState(listings);

    const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className='flex'>
        <SideBar/>
        <main className='ml-64 w-full p-6 md:p-10 bg-gray-50 min-h-screen font-sans'>
            <div className="p-6 md:p-12 bg-gray-50 min-h-screen font-sans">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="bg-white shadow rounded-xl p-6 flex items-center space-x-4"
                >
                    <div className="text-red-600 text-2xl">{stat.icon}</div>
                    <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
                    </div>
                </div>
                ))}
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Chart */}
                <div className="bg-white rounded-xl p-6 shadow">
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Monthly Reviews</h2>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="reviews" fill="#dc2626" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl p-6 shadow">
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Recent Activities</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                    {recentActivities.map((act) => (
                    <li key={act.id} className="border-b pb-2">{act.text}</li>
                    ))}
                </ul>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white p-6 rounded-xl shadow">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Your Listings</h2>
                <button className="bg-red-600 text-white px-4 py-2 text-sm rounded hover:bg-red-700 flex items-center space-x-2">
                    <FaPlus /> <span>Add New</span>
                </button>
                </div>

                <table className="min-w-full text-sm text-left text-gray-600">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Rating</th>
                    <th className="px-4 py-2 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                    <tr key={item.id} className="border-b">
                        <td className="px-4 py-3">{item.name}</td>
                        <td className="px-4 py-3">{item.type}</td>
                        <td className="px-4 py-3">{item.rating}</td>
                        <td className="px-4 py-3 text-right space-x-2">
                        <button className="text-blue-600 hover:underline text-sm flex items-center space-x-1">
                            <FaEdit />
                            <span>Edit</span>
                        </button>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:underline text-sm flex items-center space-x-1"
                        >
                            <FaTrash />
                            <span>Delete</span>
                        </button>
                        </td>
                    </tr>
                    ))}
                    {items.length === 0 && (
                    <tr>
                        <td colSpan="4" className="text-center py-4 text-gray-400">
                        No listings found.
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
            </div>
        </main>

    </div>
  )
}
