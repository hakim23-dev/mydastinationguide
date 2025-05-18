import React from 'react'

export default function TabFilter() {
    const tabs = ["All", "Hotels", "Restaurants", "Cafés", "Activities"];
  return (
    <div className="flex justify-center gap-4 mt-6 text-sm font-medium text-gray-700">
        {tabs.map(tab => (
        <button key={tab} className="px-3 py-1 hover:text-red-600 transition">
            {tab}
        </button>
        ))}
    </div>
  )
}
