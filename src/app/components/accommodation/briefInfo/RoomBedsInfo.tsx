'use client'

import { useState } from 'react'

function RoomBedsInfo({ roomInfo }) {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const BedIcon = ({ icon, alt }) => {
    // Assuming icons are stored in a way that require can access them
    const Icon = require(`@/app/assets/icons/${icon}.svg`).default
    return <Icon alt={alt} />
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">숙박 장소</h2>
      <div className="flex items-center">
        {currentIndex > 0 && (
          <button className="p-2 mr-2 bg-white border rounded-full" onClick={prev}>
            &lt;
          </button>
        )}
        <div className="grid flex-grow grid-cols-1 gap-4 md:grid-cols-3">
          {displayedRooms.map((room, index) => (
            <div key={index} className="p-4 overflow-hidden border border-solid rounded-lg border-neutral-400">
              <div className="flex mb-2 justify-left">
                {room.beds.map((bed, bedIndex) => (
                  <BedIcon key={bedIndex} icon={bed.icon} alt={bed.bedType} />
                ))}
              </div>
              <div className="text-left">
                <h3 className="font-bold">침실 {room.roomId}</h3>
                <p className="text-sm">
                  {room.beds.map((bed, bedIndex) => (
                    <span key={bedIndex}>
                      {bed.bedType} {bed.count}개,{' '}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
        {currentIndex + itemsPerPage < roomInfo.length && (
          <button className="p-2 ml-2 bg-white border rounded-full" onClick={next}>
            &gt;
          </button>
        )}
      </div>
    </div>
  )
}

export default RoomBedsInfo
