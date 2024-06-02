'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/card/carousel'
import { Link } from 'lucide-react'

function getNextThreeDays(currentDate) {
  const result = new Date(currentDate)
  result.setDate(result.getDate() + 3)
  return (
    <div>
      {currentDate.getMonth() + 1}월 {currentDate.getDate()}일~{result.getDate()}일
    </div>
  )
}

function formatWithComma(number: number): string {
  // 3자리 마다 ,를 붙입니다. 1000 => ₩1,000
  return `₩${number.toLocaleString()}/박`
}

function guestFavorite(isFavorite) {
  return (
    <>
      {isFavorite ? (
        <div className='absolute z-10 ml-[1rem] mt-[1rem] flex h-[1.7rem] w-[6.5rem] items-center justify-center rounded-xl bg-white font-bold shadow shadow-xl'>
          게스트 선호
        </div>
      ) : null}
    </>
  )
}

function wishHeart(like, setLike) {
  return (
    <div
      className='absolute z-10 ml-[16.3rem] mt-[1rem] transform transition-transform duration-300 hover:scale-110 '
      onClick={() => setLike(prev => !prev)}>
      {like === false ? (
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
  )
}

const buttonDuration = 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'

function Card({ accommodation }) {
  const [like, setLike] = useState(false)
  return (
    <div className='absolute relative relative h-[24.19rem] w-[19.468rem] rounded-xl bg-white'>
      <div className='absolute h-[17.938rem] w-full rounded-xl bg-slate-100'>
        {guestFavorite(accommodation.guestFavorite)}
        {wishHeart(like, setLike)}

        <Carousel className='group h-full'>
          <CarouselContent className='h-full '>
            {accommodation.imageUrl.map((eachImg, index) => (
              <CarouselItem key={index} className='relative h-full w-full rounded-xl'>
                <Image className='z-10' alt={`banner-${index}`} src={eachImg} layout='fill' />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className={buttonDuration} />
          <CarouselNext className={buttonDuration} />
        </Carousel>
      </div>

      <div className='absolute top-[310px] inline-flex  w-full flex-col '>
        <div className='flex w-full  flex-row '>
          <div className='  h-[1.5rem] w-[75%] items-center truncate font-bold'>
            {accommodation.accommodationName}
          </div>
          <span className='ml-[1rem] w-[15%] '>★{accommodation.rating}</span>
        </div>

        <div className='inline-flex items-center justify-start gap-1'>
          <div>
            <div className='mb-[0.5rem] text-[1rem] text-slate-500 '>
              {getNextThreeDays(new Date())}
            </div>
            <div className='text-sm font-bold text-neutral-800'>
              {formatWithComma(accommodation.pricePerDay)}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-[255px] top-[303px] inline-flex items-center justify-end gap-1'></div>
    </div>
  )
}

export default Card
