import Image from 'next/image'
import getRoomsDetail from '@/app/apis/fetchRoomsData/getRoomsDetail'

export default async function AccommodationDesc({ id }) {
  const { desc } = await getRoomsDetail(id, ['desc'])

  return (
    <div className='whitespace-pre border-b border-solid border-neutral-300 pb-12 pt-8'>
      <div className='line-clamp-6 text-wrap'>{desc}</div>
      <div className='mt-4'>
        <span className='cursor-pointer font-semibold underline'>더 보기</span>
        <span className='ml-1'>
          <Image
            src='/images/SquareBracketRight.svg'
            alt='SquareBracketRight'
            width={14}
            height={14}
            style={{ display: 'inline' }}
          />
        </span>
      </div>
    </div>
  )
}
