'use client'

import carouselImg from '@data/carousel.json'
import { useState } from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/accommodation/categoryBundle/ui/carousel'
import FilterButton from '@/components/common/button/FilterButton'

function ClickedButtonContent({ eachButton }) {
  return (
    <>
      <div className='inline-flex items-center justify-center w-6 h-4' />
      <Image
        className='opacity-75 group-hover:opacity-100'
        src={eachButton.src}
        width='24'
        height='24'
        alt={eachButton.contentName}
      />

      <div className='flex flex-col items-start justify-start gap-4 '>
        <p className="font-['SF Pro'] text-xs font-semibold text-neutral-500 decoration-neutral-300 decoration-2  underline-offset-[1rem] group-hover:text-black group-hover:underline ">
          {eachButton.contentName}
        </p>
      </div>
    </>
  )
}

function DefaultButtonContent({ eachButton }) {
  return (
    <>
      <div className='inline-flex items-center justify-center w-6 h-4' />
      <Image
        className='opacity-100'
        src={eachButton.src}
        width='24'
        height='24'
        alt={eachButton.contentName}></Image>

      <div className='flex flex-col items-start justify-start gap-4 '>
        <p className=" font-['SF Pro'] text-xs font-semibold text-black underline  decoration-black decoration-2 underline-offset-[1rem] ">
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
      className=' w-18 group inline-flex h-[8rem] cursor-pointer flex-col items-center justify-start gap-2 p-4 pr-2 '>
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
      {category.map((eachButton, idx) => (
        <CarouselItem key={idx} className='flex items-center justify-center w-auto basis-1/7'>
          <CarouselEachButton
            clickedId={clickedId}
            setIdClicked={setIdClicked}
            eachButton={eachButton}
          />
        </CarouselItem>
      ))}
    </>
  )
}

function CarouselCategory() {
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
      className='flex w-full flex-row lg:max-w-[30rem] xl:max-w-[50rem] 2xl:max-w-[70rem]'>
      <CarouselPrevious />
      <CarouselContent className='-ml-5'>
        <CarouselEachButtonServer />
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  )
}

function Category() {
  return (
    <div className='flex'>
      <CarouselCategory />
      <div className='ml-16 mt-[47px]'>
        <FilterButton />
      </div>
    </div>
  )
}

export default Category
