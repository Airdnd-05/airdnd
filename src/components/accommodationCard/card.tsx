'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/app/components/accommodationCard/cardCss.css'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import briefInfo from '@data/brief-info.json'
import Image from 'next/image'

const bannerImg = briefInfo.accommodationInfo[0].imageUrl

function Card() {
  return (
    <div className='relative h-[387px] w-[303px] rounded-xl bg-white'>
      <div className='absolute left-0 top-0 h-[287px] w-[303px] rounded-xl bg-zinc-400'>
        <Swiper
          className='absolute inline-flex h-full w-full flex-col items-start justify-start gap-2 rounded-xl'
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}>
          {bannerImg.map((eachBanner, index) => (
            <SwiperSlide className='h-full w-full rounded-xl' key={index}>
              <Image alt='' className='h-full w-full rounded-xl' src={eachBanner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='absolute left-[263px] top-[16px] h-6 w-6'></div>

      <div className='absolute left-0 top-[303px] inline-flex w-full flex-col items-start justify-start gap-2'>
        <div className='flex w-full flex-shrink-0 flex-row'>
          <div className='w-[85%] overflow-hidden truncate font-bold'>
            Gapyeong-eup, Gapyeong-gun, 한국의 돔하우스의 개인실
          </div>
          <div className='flex flex-row'>
            <Image alt={'RatingStar'} src={`/images/RatingStar.svg`} width={32} height={32} />
            <div className='ml-[1rem] w-[15%]'> ★4.91</div>
          </div>
        </div>

        <div className='inline-flex items-center justify-start gap-1'>
          <div>
            <span className='text-sm font-bold text-neutral-800'>₩630,977</span>
            <span>/박</span>
          </div>
        </div>
      </div>
      <div className='absolute left-[255px] top-[303px] inline-flex items-center justify-end gap-1'></div>
    </div>
  )
}

export default Card
