import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const array = [1, 2, 3, 4, 5, 6]

function BedsInfo() {
  return (
    <>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          {array.map((item, index) => (
            <CarouselItem key={index} className='basis-1/3'>
              <div className='flex h-[300px] w-[300px] flex-col items-center justify-center rounded-xl border border-solid'>
                <div className='text-2xl font-semibold'>침대 1개</div>
                <div className='text-sm'>퀸사이즈 침대 1개</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </>
  )
}

export default BedsInfo
