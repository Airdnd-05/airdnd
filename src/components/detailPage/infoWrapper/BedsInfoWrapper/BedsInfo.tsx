'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/detailPage/infoWrapper/BedsInfoWrapper/carousel'
function RoomBedsInfo({ roomInfo }) {
  return (
    <div className='border-b border-solid border-neutral-300 py-12'>
      {
        <>
          <h2 className='mb-4 text-[22px] font-semibold'>숙박 장소</h2>
          {roomInfo && (
            <Carousel className='w-30 flex'>
              <div className='h-full w-full '>
                <CarouselContent className=''>
                  {roomInfo.map((bed, index) => {
                    const typeBedData = bed.typeBed && JSON.parse(bed.typeBed)

                    return (
                      <CarouselItem className='basis-1/3 p-3'>
                        <div className='h-[212px] overflow-hidden rounded-lg border border-solid border-neutral-400 p-4'>
                          {typeBedData &&
                            typeBedData.beds.map((bed, bedIndex) => (
                              <>
                                <Image
                                  key={`icon-${bedIndex}`}
                                  //src={`/images/AmenityAc.svg`}
                                  src={`/images/${bed.icon}.svg`}
                                  alt={bed.bedType}
                                  className='h-10 w-10'
                                  width={5}
                                  height={5}
                                />
                                <div>{bed.bedType}</div>
                              </>
                            ))}
                        </div>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
                {/* {roomInfo.map((bed, index) => (
              
                <div className='h-[212px] overflow-hidden rounded-lg border border-solid border-neutral-400 p-4'>
                  <div>{bed.icon}</div>
                  <div>{bed.typeBedroomName}</div>
                </div>
              </CarouselItem>
            ))} */}

                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          )}
        </>
      }
    </div>
  )
}

export default RoomBedsInfo
