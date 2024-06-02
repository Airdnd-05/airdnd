import Image from 'next/image'
import Link from 'next/link'
import FilterButton from '@/components/common/button/FilterButton'
import fetchAccommodations from '@/utils/fetchAccommodations'
import Card from '@/components/card/card'

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
          <Link href={`/rooms/${accommodation.accommodationId}`} className='z-10'>
            <Card accommodation={accommodation}></Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
