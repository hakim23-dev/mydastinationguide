import React from 'react'

export default function ReviewCard({ user, rating, comment, location }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{user}</h3>
        <span className="text-sm font-medium text-yellow-500">⭐ {rating.toFixed(1)}</span>
      </div>
      <p className="text-gray-600 mb-2 italic">"{comment}"</p>
      <p className="text-sm text-red-600 font-medium">Location: {location}</p>
    </div>
  )
}
