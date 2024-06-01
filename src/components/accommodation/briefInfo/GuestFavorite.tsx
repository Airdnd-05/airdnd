import Image from 'next/image'

async function fetchGuestFavorite(id) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/guestFavorite?id=${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch guest favorite')
  }

  const record = await response.json()
  return record
}

async function GuestFavorite({ id }) {
  const { guestFavorite, rating, reviewCount } = await fetchGuestFavorite(id)
  console.log('guestFavorite', guestFavorite)

  if (!guestFavorite) return null

  return (
    <div className="pb-6 border-b border-solid border-neutral-300">
      <div className="px-[22px] py-[26px] mx-0  mb-[12px] flex flex-row items-center justify-between border border-gray-400 border-solid rounded-lg cursor-pointer">
        <div className="flex flex-row items-center justify-center w-2/12 pr-0.5">
          <Image alt={'WingLeft'} src={'/images/WingLeft.svg'} width={36} height={23} />
          <div className="flex flex-col text-center">
            <span className="text-lg font-semibold leading-none">
              게스트 <br /> 선호
            </span>
          </div>
          <Image alt={'WingRight'} src={'/images/WingRight.svg'} width={36} height={23} />
        </div>
        <div className="flex flex-row items-center justify-center w-5/12 pr-0.5">
          <span className="text-base font-semibold leading-6">에어비앤비 게스트에게 가장 사랑받는 숙소</span>
        </div>
        <div className="flex flex-col items-center justify-center pr-0.5 w-1/8">
          <span className="text-2xl font-semibold">{rating}</span>
          <span className="text-sm">★★★★★</span>
        </div>
        <span className="w-6 h-[0px] rotate-90 border border-solid border-gray-200 inline"></span>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-semibold">{reviewCount}개</span>
          <span className="text-base underline">후기</span>
        </div>
      </div>
    </div>
  )
}

export default GuestFavorite
