'use client'

import briefInfo from '@data/brief-info.json'
import Image from 'next/image'

import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/card/carousel'

function getNextThreeDays(currentDate) {
  const result = new Date(currentDate)
  result.setDate(result.getDate() + 3)
  return (
    <div>
      {currentDate.getMonth() + 1}월 {currentDate.getDate()}일 ~ {result.getMonth() + 1}월{' '}
      {result.getDate()}일
    </div>
  )
}

const bannerImg = briefInfo.accommodationInfo[0].imageUrl
const buttonDuration = 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'

function Card() {
  const [like, setLike] = useState(false)
  return (
    <div className='absolute relative relative h-[24.19rem] w-[18.9375rem] rounded-xl bg-white'>
      <div className='absolute h-[17.938rem] w-[18.9375rem] rounded-xl bg-slate-100'>
        <div className='absolute z-10 ml-[1rem] mt-[1rem] flex h-[1.7rem] w-[6.5rem] items-center justify-center rounded-xl bg-white font-bold shadow shadow-xl'>
          게스트 선호
        </div>
        <div
          className='absolute z-10 ml-[16rem] mt-[1rem] transform transition-transform duration-300 hover:scale-110 '
          onClick={() => setLike(prev => !prev)}>
          {like ? (
            <Image
              alt={'useHeartIcon'}
              src={'/images/CardUnUseHeart.svg'}
              width={26}
              height={26}></Image>
          ) : (
            <Image
              alt={'unUseHeartIcon'}
              src={'/images/CardUseHeart.svg'}
              width={26}
              height={26}></Image>
          )}
        </div>

        <Carousel className='group h-full'>
          <CarouselContent className='h-full '>
            {bannerImg.map((eachImg, index) => (
              <CarouselItem key={index} className='relative h-full w-full rounded-xl'>
                <Image
                  className='z-10 rounded-xl'
                  alt={`banner-${index}`}
                  src={eachImg}
                  layout='fill'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={buttonDuration} />
          <CarouselNext className={buttonDuration} />
        </Carousel>
      </div>

      <div className='absolute top-[310px] inline-flex  w-full flex-col items-start justify-start'>
        <div className='flex w-full flex-shrink-0 flex-row '>
          <div className='h-[1.4rem]  w-[85%]  overflow-hidden truncate  font-bold'>
            Gapyeong-eup, Gapyeong-gun, 한국의 돔하우스의 개인실
          </div>
          <div className='flex flex-row'>
            <div className=' ml-[1rem] w-[15%] '> ★4.91</div>
          </div>
        </div>

        <div className='inline-flex items-center justify-start gap-1'>
          <div>
            <div className='mb-[0.5rem] text-[1rem] text-slate-500 '>
              {getNextThreeDays(new Date())}
            </div>
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
