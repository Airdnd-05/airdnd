import Image from 'next/image'

async function fetchGuestFavorite(id) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/guestFavorite?id=${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch guest favorite')
  }

  const record = await response.json()
  return record
}

async function NonGuestFavorite({ id }) {
  const { guestFavorite, rating, reviewCount } = await fetchGuestFavorite(id)
  console.log('guestFavorite', guestFavorite)

  if (guestFavorite) return null

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
