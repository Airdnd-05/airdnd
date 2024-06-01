import RoomBedsInfo from '@/components/accommodation/briefInfo/RoomBedsInfo'
import Summary from '@/components/accommodation/briefInfo/Summary'
import briefInfo from '@data/brief-info.json'
import ReservationCard from '@/components/accommodation/briefInfo/ReservationCard'
import HostProfile from './HostProfile'
import AccomodationDesc from './AccomodationDesc'
import GuestFavorite from '@/components/accommodation/briefInfo/GuestFavorite'
import NonGuestFavorite from '@/components/accommodation/briefInfo/NonGuestFavorite'

const accommodation = briefInfo.accommodationInfo[1]

function BriefInfo({ id }) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col w-7/12">
        <Summary
          locationName={accommodation.locationName}
          briefRoomInfo={accommodation.briefRoomInfo}
          guestFavorite={accommodation.guestFavorite}
          id={id}>
          <NonGuestFavorite id={id} />
        </Summary>
        <GuestFavorite id={id} />
        <HostProfile />
        <AccomodationDesc desc={accommodation.desc} />
        {accommodation.roomInfo.length > 0 && <RoomBedsInfo roomInfo={accommodation.roomInfo} />}
      </div>
      <div className="flex justify-end hidden w-4/12 pt-8 md:inline">
        <ReservationCard />
      </div>
    </div>
  )
}

export default BriefInfo
