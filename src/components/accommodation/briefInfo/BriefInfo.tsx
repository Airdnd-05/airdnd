'use client'

import RoomBedsInfo from '@/components/accommodation/briefInfo/RoomBedsInfo'
import Summary from '@/components/accommodation/briefInfo/Summary'
import briefInfo from '@data/brief-info.json'
import ReservationCard from '@/components/accommodation/briefInfo/ReservationCard'

const accommodation = briefInfo.accommodationInfo[0]

function BriefInfo() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col w-8/12 border-b border-gray-200 border-solid">
        <Summary
          locationName={accommodation.locationName}
          briefRoomInfo={accommodation.briefRoomInfo}
          guestFavorite={accommodation.guestFavorite}
          rating={accommodation.rating}
          reviewCount={accommodation.reviewCount}
        />
        {accommodation.roomInfo.length > 0 && <RoomBedsInfo roomInfo={accommodation.roomInfo} />}
      </div>
      <div className="flex justify-end w-4/12 pt-8 hidden md:inline">
        <ReservationCard />
      </div>
    </div>
  )
}

export default BriefInfo
