'use client'

import briefInfo from '@data/brief-info.json'
import Image from 'next/image'

import { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/card/carousel'

const bannerImg = briefInfo.accommodationInfo[0].imageUrl
const buttonDuration = 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'

function Card() {
  const [like, setLike] = useState(false)
  return (
    <div className="w-[303px] h-[387px] relative bg-white rounded-xl relative absolute">
      <div className="w-[303px] h-[287px] left-0 top-0 absolute bg-zinc-400 rounded-xl">
        <div className="flex flex-row w-full  ">
          <div className="w-20 h-4 right-[200px] top-[16px] absolute z-10 ">게스트</div>
          <div
            className="w-4 h-4 absolute z-10  transition-transform duration-300 transform hover:scale-110 "
            onClick={() => setLike(prev => !prev)}>
            {like ? (
              <Image alt={'useHeartIcon'} src={'/images/CardUnUseHeart.svg'} width={50} height={50}></Image>
            ) : (
              <Image alt={'unUseHeartIcon'} src={'/images/CardUseHeart.svg'} width={32} height={32}></Image>
            )}
          </div>
        </div>
        <Carousel className="group h-full">
          <CarouselContent className="h-full ">
            {bannerImg.map((eachImg, index) => (
              <CarouselItem key={index} className="w-full h-full relative rounded-xl">
                <Image className="z-10 rounded-xl" alt={`banner-${index}`} src={eachImg} layout="fill" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={buttonDuration} />
          <CarouselNext className={buttonDuration} />
        </Carousel>
      </div>

      <div className="w-full left-0 top-[303px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="flex flex-row  w-full flex-shrink-0 ">
          <div className=" w-[85%]  truncate overflow-hidden  font-bold">
            Gapyeong-eup, Gapyeong-gun, 한국의 돔하우스의 개인실
          </div>
          <div className="flex flex-row">
            <div className=" ml-[1rem] w-[15%] "> ★4.91</div>
          </div>
        </div>

        <div className="justify-start items-center gap-1 inline-flex">
          <div>
            <span className="text-neutral-800 text-sm font-bold">₩630,977</span>
            <span>/박</span>
          </div>
        </div>
      </div>
      <div className="left-[255px] top-[303px] absolute justify-end items-center gap-1 inline-flex"></div>
    </div>
  )
}

export default Card
