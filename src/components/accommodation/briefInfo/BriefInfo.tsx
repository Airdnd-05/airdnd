import RoomBedsInfo from '@/components/accommodation/briefInfo/RoomBedsInfo'
import Summary from '@/components/accommodation/briefInfo/Summary'
import briefInfo from '@data/brief-info.json'
import ReservationCard from '@/components/accommodation/briefInfo/ReservationCard'
import HostProfile from './HostProfile'
import AccommodationDesc from './AccommodationDesc'
import fetchRoomsData from '@/utils/fetchRoomsData'

const accommodation = briefInfo.accommodationInfo[1]

async function BriefInfo({ id }) {
  const fields = ['roomInfo']
  const roomInfo = await fetchRoomsData(id, fields)

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col w-7/12">
        <Summary id={id} />
        <HostProfile id={id} />
        <AccommodationDesc id={id} />
        <RoomBedsInfo roomInfo={roomInfo.roomInfo} />
      </div>
      <div className="flex justify-end w-4/12 pt-8 md:inline">
        <ReservationCard />
      </div>
    </div>
  )
}

export default BriefInfo
