import React from 'react'

export default function SectionHeader({title}) {
  return (
    <div className="flex justify-between items-center mt-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      <a href="#" className="text-red-600 text-sm font-medium">View All</a>
    </div>
  )
}
