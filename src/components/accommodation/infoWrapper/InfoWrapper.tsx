import getRoomsDetail from '@/app/apis/fetchRoomsData/getRoomsDetail'
import RoomsBriefInfo from '@/components/accommodation/infoWrapper/RoomsBriefInfo'
import BedsInfo from '@/components/accommodation/infoWrapper/BedsInfo'
import ReservationCard from '@/components/accommodation/infoWrapper/ReservationCard'
import TravelersModalButton from '@/modals/TravelersModalButton'
import HostProfile from './HostProfile'
import AccommodationDesc from './AccommodationDesc'

async function BriefInfo({ id }) {
  const fields = ['roomInfo']
  const roomInfo = await getRoomsDetail(id, fields)

  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-col w-7/12'>
        <RoomsBriefInfo id={id} />
        <HostProfile id={id} />
        <AccommodationDesc id={id} />
        <BedsInfo roomInfo={roomInfo.roomInfo} />
      </div>
      <div className='flex justify-end hidden w-4/12 pt-8 md:inline'>
        <ReservationCard />
      </div>
      <TravelersModalButton />
    </div>
  )
}

export default BriefInfo
