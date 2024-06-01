import Image from 'next/image'
import fetchRoomsData from '@/utils/fetchRoomsData'

async function NonGuestFavorite({ id }) {
  const fields = ['rating', 'reviewCount']
  const { rating, reviewCount } = await fetchRoomsData(id, fields)

  return (
    <div className='mt-2 border-b border-solid border-neutral-300 pb-12'>
      <div className='flex items-center gap-1'>
        <Image alt={'RatingStar'} src={`/images/RatingStar.svg`} width={32} height={32} />
        <span className='text-base font-semibold'>{rating}</span>
        {reviewCount && (
          <>
            <span> · </span>
            <span className='cursor-pointer text-base underline'>후기 {reviewCount}개</span>
          </>
        )}
      </div>
    </div>
  )
}

export default NonGuestFavorite
