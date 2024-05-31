import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const array = [1, 2, 3, 4, 5, 6]

function BedsInfo() {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {array.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="flex flex-col items-center justify-center border border-solid rounded-xl h-[300px] w-[300px]">
                <div className="text-2xl font-semibold">침대 1개</div>
                <div className="text-sm">퀸사이즈 침대 1개</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default BedsInfo
