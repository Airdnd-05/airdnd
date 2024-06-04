import Link from 'next/link'
import CategoryCarousel from '@/components/accommodation/category/CarouselCategory'
import FilterButton from '@/components/common/button/FilterButton'
import getRoomsList from '@/app/apis/fetchMainPage/getRoomsList'
import Card from '@/components/card/card'

function RoomsItem({ accommodation }) {
  return (
    <Link href={`/rooms/${accommodation.accommodationId}`}>
      <Card
        accommodationName={accommodation.accommodationName}
        imageUrl={accommodation.imageUrl}
        pricePerDay={accommodation.pricePerDay}
        rating={accommodation.rating}
        guestFavorite={accommodation.guestFavorite}
      />
    </Link>
  )
}

export default async function Home() {
  const accommodations = await getRoomsList()

  return (
    <div className='flex flex-col items-center justify-start'>
      <div className='flex w-full max-w-[1760px] flex-row items-center justify-between px-4'>
        <div className='flex-1'>
          <CategoryCarousel />
        </div>
        <div className='ml-4 bg-white'>
          <FilterButton />
        </div>
      </div>
      <div className='mt-8 grid w-full max-w-[1760px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {accommodations.map((accommodation, index) => (
          <RoomsItem key={`RoomsItem-${index}`} accommodation={accommodation} />
        ))}
      </div>
    </div>
  )
}
