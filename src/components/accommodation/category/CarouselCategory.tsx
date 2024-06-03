'use client'

import carouselImg from '@data/carousel.json'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/accommodation/category/ui/carousel'
import { useState } from 'react'
import Image from 'next/image'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

function ClickedButtonContent({ eachButton }) {
  return (
    <>
      <div className="w-6 h-4 justify-center items-center inline-flex" />
      <Image
        className="opacity-75 group-hover:opacity-100"
        src={eachButton.src}
        width="24"
        height="24"
        alt={eachButton.contentName}
      />

      <div className="flex-col justify-start items-start gap-4 flex ">
        <p className="text-neutral-500 group-hover:text-black group-hover:underline underline-offset-[1rem] decoration-neutral-300 decoration-2 text-xs  font-semibold font-['SF Pro'] ">
          {eachButton.contentName}
        </p>
      </div>
    </>
  )
}

function DefaultButtonContent({ eachButton }) {
  return (
    <>
      <div className="w-6 h-4 justify-center items-center inline-flex" />
      <Image className="opacity-100" src={eachButton.src} width="24" height="24" alt={eachButton.contentName}></Image>

      <div className="flex-col justify-start items-start gap-4 flex ">
        <p className=" text-black underline underline-offset-[1rem] decoration-black decoration-2 text-xs  font-semibold font-['SF Pro'] ">
          {eachButton.contentName}
        </p>
      </div>
    </>
  )
}

function CarouselEachButton({ clickedId, setIdClicked, eachButton }) {
  return (
    <button
      onClick={() => {
        setIdClicked(eachButton.id)
      }}
      className=" p-4 group cursor-pointer pr-2 w-18 h-[8rem] flex-col justify-start items-center gap-2 inline-flex ">
      {clickedId === eachButton.id ? (
        <DefaultButtonContent eachButton={eachButton} />
      ) : (
        <ClickedButtonContent eachButton={eachButton} />
      )}
    </button>
  )
}

function CarouselEachButtonServer() {
  const { category } = carouselImg
  const [clickedId, setIdClicked] = useState(1)
  return (
    <>
      {category.map((eachButton, idx) => {
        return (
          <CarouselItem key={idx} className="basis-1/7 flex items-center justify-center w-auto">
            <CarouselEachButton clickedId={clickedId} setIdClicked={setIdClicked} eachButton={eachButton} />
          </CarouselItem>
        )
      })}
    </>
  )
}

function CategoryCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        skipSnaps: true,
        loop: false,
        dragFree: false,
        axis: 'x',
        containScroll: 'trimSnaps',
      }}
      plugins={[WheelGesturesPlugin({ forceWheelAxis: 'x', target: 'Element' })]}
      className="w-full max-w-[70rem]">
      <CarouselPrevious className="" />
      <CarouselContent className="-ml-5">
        <CarouselEachButtonServer />
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  )
}

export default CategoryCarousel
