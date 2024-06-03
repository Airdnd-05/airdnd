'use client'

import Image from 'next/image'
import { useState } from 'react'

function RoomBedsInfo({ roomInfo }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  if (!roomInfo?.length) return null

  const itemsPerPage = 3

  function next() {
    if (currentIndex + 1 < roomInfo.length) {
      setCurrentIndex(prevIndex => prevIndex + 1)
    }
  }

  function prev() {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(prevIndex => prevIndex - 1)
    }
  }

  const displayedRooms = roomInfo.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <div className='border-b border-solid border-neutral-300 py-12'>
      <h2 className='mb-4 text-xl font-bold'>숙박 장소</h2>
      <div className='flex items-center'>
        {currentIndex > 0 && (
          <button className='mr-2 rounded-full border bg-white p-2' onClick={prev}>
            &lt;
          </button>
        )}
        <div className='grid flex-grow grid-cols-1 gap-4 md:grid-cols-3'>
          {displayedRooms.map((room, index) => (
            <div
              key={`displayedRooms-${index}`}
              className='h-[212px] overflow-hidden rounded-lg border border-solid border-neutral-400 p-4'>
              <div className='justify-left mb-2 flex'>
                {room.beds.map((bed, bedIndex) => (
                  <Image
                    key={`roomBedsTop-${bedIndex}`}
                    alt={bed.icon}
                    src={`/images/${bed.icon}.svg`}
                    width={32}
                    height={32}
                  />
                ))}
              </div>
              <div className='text-left'>
                <h3 className='font-bold'>침실 {room.roomId}</h3>
                <p className='text-sm'>
                  {room.beds.map((bed, bedIndex) => (
                    <span key={`roomBedsBottom-${bedIndex}`}>
                      {bed.bedType} {bed.count}개,{' '}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
        {currentIndex + itemsPerPage < roomInfo.length && (
          <button className='ml-2 rounded-full border bg-white p-2' onClick={next}>
            &gt;
          </button>
        )}
      </div>
    </div>
  )
}

export default RoomBedsInfo
