import Image from 'next/image'

export default function GuestFavorite({ roomRating }) {
  return (
    <div className='mb-16 items-center'>
      <div className='flex items-end justify-center'>
        <Image
          alt='left wing'
          width={87}
          height={132}
          src={
            'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png'
          }
        />
        <div
          className='flex
     text-[100px]'>
          {roomRating}
        </div>
        <Image
          alt='left wing'
          width={87}
          height={132}
          src={
            'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png'
          }
        />
      </div>

      <div>
        <p className='mb-1 text-center text-[22px] font-medium'>게스트 선호</p>
        <p className='text-center text-lg font-normal text-neutral-500'>평점 후기, 신뢰도 기준</p>
        <p className='text-center text-lg font-normal text-neutral-500'>
          에어비앤비에서 가장 사랑받는 숙소
        </p>
      </div>
    </div>
  )
}
