import FilterButton from '@/components/mainPage/categoryWrapper/filterModal/FilterModalButton'
import CarouselCategory from '@/components/mainPage/categoryWrapper/CarouselCategory'

function CategoryWrapper() {
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex-grow overflow-hidden'>
        <CarouselCategory />
      </div>
      <div className='ml-4 flex-shrink-0'>
        <FilterButton />
      </div>
    </div>
  )
}

export default CategoryWrapper
