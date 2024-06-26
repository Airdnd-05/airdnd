import Image from 'next/image'
import getRoomsDetail from '@/app/apis/fetchRoomsData/getRoomsDetail'

async function NonGuestFavorite({ id }) {
  const fields = ['rating', 'reviewCount']
  const { rating, reviewCount } = await getRoomsDetail(id, fields)

  return (
    <div className='mt-2 border-b border-solid border-neutral-300 pb-10'>
      <div className='flex items-center gap-1'>
        <Image alt={'RatingStar'} src={`/images/RatingStar.svg`} width={20} height={20} />
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

async function GuestFavorite({ id }) {
  const fields = ['rating', 'reviewCount']
  const { rating, reviewCount } = await getRoomsDetail(id, fields)

  return (
    <div className='border-b border-solid border-neutral-300 pb-6'>
      <div className='mx-0 mb-[12px] flex cursor-pointer flex-row items-center justify-between rounded-lg border border-solid border-gray-400 px-[22px] py-[26px]'>
        <div className='flex w-2/12 flex-row items-center justify-center pr-0.5'>
          <Image
            alt={'WingLeft'}
            src={'/images/WingLeft.svg'}
            width={0}
            height={0}
            style={{ width: 36, height: 23 }}
          />
          <div className='flex flex-col text-center'>
            <span className='whitespace-nowrap text-lg font-semibold leading-none'>
              게스트 <br /> 선호
            </span>
          </div>
          <Image
            alt={'WingRight'}
            src={'/images/WingRight.svg'}
            width={0}
            height={0}
            style={{ width: 36, height: 23 }}
          />
        </div>
        <div className='flex w-5/12 flex-row items-center justify-center pr-0.5'>
          <span className='text-base font-semibold leading-6'>
            에어비앤비 게스트에게 가장 사랑받는 숙소
          </span>
        </div>
        <div className='w-1/8 flex flex-col items-center justify-center pr-0.5'>
          <span className='text-2xl font-semibold'>{rating}</span>
          <span className='text-sm'>★★★★★</span>
        </div>
        <span className='inline h-[0px] w-6 rotate-90 border border-solid border-gray-200'></span>
        <div className='flex flex-col items-center justify-center'>
          <span className='text-xl font-semibold'>{reviewCount}개</span>
          <span className='text-base underline'>후기</span>
        </div>
      </div>
    </div>
  )
}

export { NonGuestFavorite, GuestFavorite }
