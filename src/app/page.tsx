import Image from 'next/image'
import Link from 'next/link'
import FilterButton from '@/components/common/button/FilterButton'
import fetchAccommodations from '@/utils/fetchAccommodations'

export default async function Home() {
  const accommodations = await fetchAccommodations()

  return (
    <div className='flex flex-col items-center justify-start'>
      <div className='flex h-[100px] w-full flex-row items-center justify-between bg-slate-300'>
        <div className='flex w-full flex-row items-center justify-center'>
          캐로셀 카테고리가 위치할 자리입니다.
        </div>
        <div className='flex flex-row items-center justify-between bg-white'>
          <FilterButton />
        </div>
      </div>
      <div className='flex flex-wrap gap-4'>
        {accommodations.map((accommodation, index) => (
          <Link
            href={`/rooms/${accommodation.accommodationId}`}
            key={index}
            className='w-full rounded-lg border border-gray-200 p-2 shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6'>
            <div className='relative w-full pt-[100%]'>
              <Image
                src={accommodation.imageUrl}
                alt={accommodation.accommodationName}
                fill
                className='object-cover'
                sizes='(min-width: 229px) 50vw, 100vw'
              />
            </div>
            <div className='p-2'>
              <h2 className='text-lg font-semibold'>{accommodation.accommodationName}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
