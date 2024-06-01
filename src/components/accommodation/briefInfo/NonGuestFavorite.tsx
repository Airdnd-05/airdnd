import fetchRoomsData from '@/utils/fetchRoomsData'
import Image from 'next/image'

async function NonGuestFavorite({ id }) {
  const fields = ['rating', 'reviewCount']
  const { rating, reviewCount } = await fetchRoomsData(id, fields)

  return (
    <div className="pb-12 mt-2 border-b border-solid border-neutral-300">
      <div className="flex items-center gap-1">
        <Image alt={'RatingStar'} src={`/images/RatingStar.svg`} width={32} height={32} />
        <span className="text-base font-semibold">{rating}</span>
        {reviewCount && (
          <>
            <span> · </span>
            <span className="text-base underline cursor-pointer">후기 {reviewCount}개</span>
          </>
        )}
      </div>
    </div>
  )
}

export default NonGuestFavorite
