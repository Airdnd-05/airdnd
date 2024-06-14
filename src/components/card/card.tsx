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
import { formatWithComma } from '@/utils/formatingPrice'

function getNextThreeDays(currentDate) {
  const result = new Date(currentDate)
  result.setDate(result.getDate() + 3)
  return (
    <div className='text-sm'>
      {currentDate.getMonth() + 1}월 {currentDate.getDate()}일~{result.getDate()}일
    </div>
  )
}

function guestFavorite(isFavorite) {
  return (
    <>
      {isFavorite ? (
        <div className='absolute left-3 top-3 z-10 flex h-[1.7rem] w-[5.5rem] items-center justify-center rounded-xl bg-white text-sm font-bold shadow-xl'>
          게스트 선호
        </div>
      ) : null}
    </>
  )
}

function wishHeart(like, setLike) {
  return (
    <div
      className='absolute right-3 top-3 z-10 transform transition-transform duration-300 hover:scale-110'
      onClick={event => {
        event.preventDefault()
        setLike(prev => !prev)
      }}>
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

function Card({ accommodationName, imageUrl, pricePerDay, rating, guestFavorite: isFavorite }) {
  const [like, setLike] = useState(false)
  return (
    <div className='mb-6 rounded-xl bg-white'>
      <div className='relative rounded-xl bg-slate-100'>
        {guestFavorite(isFavorite)}
        {wishHeart(like, setLike)}

        <Carousel className='group w-full bg-white'>
          <div className='relative'>
            <CarouselContent className='h-full '>
              {imageUrl.map((eachImg, index) => (
                <CarouselItem
                  key={`CarouselItem-${index}`}
                  className='relative aspect-square h-full w-full rounded-xl'>
                  <Image
                    className=''
                    alt={`banner-${index}`}
                    src={eachImg}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={`z-30 ${buttonDuration}`} />
            <CarouselNext className={`z-30 ${buttonDuration}`} />
          </div>
          <div className='mt-[1rem] flex w-full flex-col '>
            <div className='flex w-full flex-row justify-between'>
              <div className='h-[1.5rem] w-[70%] items-center truncate text-sm font-bold'>
                {accommodationName}
              </div>
              <span className='w-[15%] text-sm'>★{rating}</span>
            </div>

            <div className='inline-flex items-center justify-start gap-1'>
              <div>
                <div className='mb-[0.5rem] text-[1rem] text-slate-500 '>
                  {getNextThreeDays(new Date())}
                </div>
                <div className='text-sm font-semibold text-neutral-800'>
                  {formatWithComma(pricePerDay)} <span className='font-normal'>{` /박`}</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Card
