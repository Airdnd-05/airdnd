import RoomBedsInfo from '@/components/accommodation/briefInfo/RoomBedsInfo'
import Summary from '@/components/accommodation/briefInfo/Summary'
import ReservationCard from '@/components/accommodation/briefInfo/ReservationCard'
import fetchRoomsData from '@/utils/fetchRoomsData'
import HostProfile from './HostProfile'
import AccommodationDesc from './AccommodationDesc'

async function BriefInfo({ id }) {
  const fields = ['roomInfo']
  const roomInfo = await fetchRoomsData(id, fields)

  return (
    <div className='flex flex-row justify-between'>
      <div className='flex w-7/12 flex-col'>
        <Summary id={id} />
        <HostProfile id={id} />
        <AccommodationDesc id={id} />
        <RoomBedsInfo roomInfo={roomInfo.roomInfo} />
      </div>
      <div className='flex w-4/12 justify-end pt-8 md:inline'>
        <ReservationCard />
      </div>
    </div>
  )
}

export default BriefInfo
