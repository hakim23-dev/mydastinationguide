import React from 'react'
import { FaHeart } from "react-icons/fa";

export default function Card({data}) {
  return (
    <div className="rounded-xl shadow bg-white overflow-hidden">
      <img src={data.image} alt={data.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{data.name}</h3>
        <p className="text-gray-500 text-sm">{data.location}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full">{data.category}</span>
          <span className="text-yellow-500 font-bold">{data.rating} ★</span>
        </div>
      </div>
    </div>
  )
}
