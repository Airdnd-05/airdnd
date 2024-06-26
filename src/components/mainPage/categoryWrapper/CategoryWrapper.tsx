import FilterButton from '@/components/mainPage/categoryWrapper/filterModal/FilterModalButton'
import CarouselCategory from '@/components/mainPage/categoryWrapper/CarouselCategory'

function CategoryWrapper() {
  return (
    <div className='flex w-full items-center justify-between'>
      <CarouselCategory />
      <FilterButton />
    </div>
  )
}

export default CategoryWrapper
