'use client'

import React from 'react'
import briefInfo from '@/app/assets/data/brief-info.json'

const { amenities } = briefInfo.accommodationInfo[0]

const AmenityIcon = ({ icon, alt }) => {
  // Assuming icons are stored in a way that require can access them
  const Icon = require(`@/app/assets/icons/${icon}.svg`).default
  return <Icon alt={alt} />
}

function AmenityInfo() {
  return (
    <div className="p-4 pl-0 border rounded-lg">
      <h2 className="mb-4 text-xl font-bold">숙소 편의시설</h2>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center">
            <AmenityIcon icon={amenity.icon} alt={amenity.amenityName} />
            <p>{amenity.amenityName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AmenityInfo
