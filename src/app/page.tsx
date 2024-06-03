import CategoryCarousel from '@/components/accommodation/category/CarouselCategory'
import FilterButton from '@/components/common/button/FilterButton'
import Image from 'next/image'
import Link from 'next/link'

async function fetchAccommodations() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/accommodations`)
  if (!response.ok) {
    throw new Error('Failed to fetch accommodation data')
  }
  const data = await response.json()
  return data.accommodationInfo
}

export default async function Home() {
  const accommodations = await fetchAccommodations()

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex flex-row items-center h-26">
        <div className="flex flex-row items-center justify-center max-w-[1760px]">
          <CategoryCarousel />
        </div>
        <div className="flex flex-row items-center justify-between bg-white">
          <FilterButton />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {accommodations.map((accommodation, index) => (
          <Link
            href={`/rooms/${accommodation.accommodationId}`}
            key={index}
            className="w-full p-2 border border-gray-200 rounded-lg shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
            <div className="relative w-full pt-[100%]">
              <Image src={accommodation.imageUrl} alt={accommodation.accommodationName} fill className="object-cover" />
            </div>
            <div className="p-2">
              <h2 className="text-lg font-semibold">{accommodation.accommodationName}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
