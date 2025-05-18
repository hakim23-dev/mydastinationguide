import React from 'react'
import { FaSlidersH } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="mt-4 mx-auto w-full max-w-2xl">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
        <input
            type="text"
            placeholder="Search for hotels, restaurants, cafés, and more..."
            className="flex-grow bg-transparent outline-none px-2 text-sm"
        />
        <FaSlidersH className="text-gray-500" />
      </div>
    </div>
  )
}
