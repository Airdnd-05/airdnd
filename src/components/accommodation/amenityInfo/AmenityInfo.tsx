import React from 'react'
import Image from 'next/image'
import fetchRoomsData from '@/utils/fetchRoomsData'

function AmenityItem({ amenity }) {
  return (
    <>
      <div className='flex items-center'>
        <Image
          alt={amenity.amenityName}
          src={`/images/${amenity.icon}.svg`}
          width={32}
          height={32}
        />
        <p>{amenity.amenityName}</p>
      </div>
    </>
  )
}

async function AmenityInfo({ id }) {
  const { amenities } = await fetchRoomsData(id, ['amenities'])
  return (
    <div className='border-b border-solid border-neutral-300 py-12'>
      <h2 className='mb-4 text-xl font-bold'>숙소 편의시설</h2>
      <div className='grid grid-cols-2 gap-4'>
        {amenities.map((amenity, index) => (
          <div key={`AmenityItem-${index}`}>
            <AmenityItem amenity={amenity} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AmenityInfo
