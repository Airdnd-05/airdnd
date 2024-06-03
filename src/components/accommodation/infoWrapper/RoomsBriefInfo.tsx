import {
  NonGuestFavorite,
  GuestFavorite,
} from '@/components/accommodation/infoWrapper/GuestFavorite'
import fetchRoomsData from '@/utils/fetchRoomsData'

function AmenityBriefItem({ info, index }) {
  return (
    <li>
      {index > 0 && '· '}
      {info}
    </li>
  )
}

async function RoomsBriefInfo({ id }) {
  const fields = ['locationName', 'briefRoomInfo', 'guestFavorite']
  const { locationName, briefRoomInfo, guestFavorite } = await fetchRoomsData(id, fields)

  return (
    <>
      <div className='z-50 flex h-auto flex-col justify-between py-8'>
        <section>
          <div className='mb-1'>
            <h2 className='text-2xl font-semibold'>{locationName}</h2>
          </div>
          <div>
            <ol className='flex flex-row space-x-1'>
              {briefRoomInfo.map((info, index) => (
                <AmenityBriefItem key={`AmenityBriefItem-${index}`} info={info} index={index} />
              ))}
            </ol>
          </div>
          {!guestFavorite && <NonGuestFavorite id={id} />}
        </section>
      </div>
      {guestFavorite && <GuestFavorite id={id} />}
    </>
  )
}

export default RoomsBriefInfo