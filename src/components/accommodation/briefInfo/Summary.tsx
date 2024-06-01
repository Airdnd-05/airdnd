import GuestFavorite from '@/components/accommodation/briefInfo/GuestFavorite'
import NonGuestFavorite from '@/components/accommodation/briefInfo/NonGuestFavorite'
import fetchRoomsData from '@/utils/fetchRoomsData'

async function Summary({ id }) {
  const fields = ['locationName', 'briefRoomInfo', 'guestFavorite']
  const { locationName, briefRoomInfo, guestFavorite } = await fetchRoomsData(id, fields)

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
          {!guestFavorite && <NonGuestFavorite id={id} />}
        </section>
      </div>
      {guestFavorite && <GuestFavorite id={id} />}
    </>
  )
}

export default Summary
