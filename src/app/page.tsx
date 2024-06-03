import CategoryCarousel from '@/components/accommodation/category/CarouselCategory'
import FilterButton from '@/components/common/button/FilterButton'
import Image from 'next/image'
import Link from 'next/link'
import fetchAccommodations from '@/utils/fetchAccommodations'
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
  const accommodations = await fetchAccommodations()

  return (
    <div className='flex flex-col items-center justify-start'>
      <div className='h-26 flex flex-row items-center'>
        <div className='flex max-w-[1760px] flex-row items-center justify-center'>
          <CategoryCarousel />
        </div>
        <div className='flex flex-row items-center justify-between bg-white'>
          <FilterButton />
        </div>
      </div>
      <div className='flex flex-wrap gap-4'>
        {accommodations.map((accommodation, index) => (
          <RoomsItem key={`RoomsItem-${index}`} accommodation={accommodation} />
        ))}
      </div>
    </div>
  )
}
