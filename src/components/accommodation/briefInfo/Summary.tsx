'use client'

import GuestFavorite from '@/components/accommodation/briefInfo/GuestFavorite'
import NonGuestFavorite from '@/components/accommodation/briefInfo/NonGuestFavorite'
import { useAccommodationId } from '@/context/AccommodationContext'
import clsx from 'clsx'
import Image from 'next/image'

function Summary({ locationName, briefRoomInfo, guestFavorite, id, children }) {
  // const id = useAccommodationId()

  return (
    <>
      <div className="z-50 flex flex-col justify-between h-auto py-8">
        <section>
          <div className="mb-1">
            <h2 className="text-2xl font-semibold">{locationName}</h2>
          </div>
          <div>
            <ol className="flex flex-row space-x-1">
              {briefRoomInfo.map((info, index) => (
                <li key={index}>
                  {index > 0 && '· '}
                  {info}
                </li>
              ))}
            </ol>
          </div>
          {children}
        </section>
      </div>
    </>
  )
}

export default Summary
