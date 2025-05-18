import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition"
    >
      <span className="mr-3 text-red-600 text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  )
}
