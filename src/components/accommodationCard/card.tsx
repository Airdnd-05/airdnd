'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/app/components/accommodationCard/cardCss.css'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import briefInfo from '@data/brief-info.json'
import RatingStar from '@/app/assets/icons/RatingStar.svg'
import Image from 'next/image'

const bannerImg = briefInfo.accommodationInfo[0].imageUrl

function Card() {
  return (
    <div className="w-[303px] h-[387px] relative bg-white rounded-xl">
      <div className="w-[303px] h-[287px] left-0 top-0 absolute bg-zinc-400 rounded-xl">
        <Swiper
          className="absolute inline-flex flex-col items-start justify-start w-full h-full gap-2 rounded-xl"
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}>
          {bannerImg.map((eachBanner, index) => (
            <SwiperSlide className="w-full h-full rounded-xl" key={index}>
              <img className="w-full h-full rounded-xl" src={eachBanner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-6 h-6 left-[263px] top-[16px] absolute"></div>

      <div className="w-full left-0 top-[303px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="flex flex-row flex-shrink-0 w-full ">
          <div className=" w-[85%]  truncate overflow-hidden  font-bold">
            Gapyeong-eup, Gapyeong-gun, 한국의 돔하우스의 개인실
          </div>
          <div className="flex flex-row">
            <Image alt={'RatingStar'} src={`/images/RatingStar.svg`} width={32} height={32} />
            <div className=" ml-[1rem] w-[15%] "> ★4.91</div>
          </div>
        </div>

        <div className="inline-flex items-center justify-start gap-1">
          <div>
            <span className="text-sm font-bold text-neutral-800">₩630,977</span>
            <span>/박</span>
          </div>
        </div>
      </div>
      <div className="left-[255px] top-[303px] absolute justify-end items-center gap-1 inline-flex"></div>
    </div>
  )
}

export default Card
