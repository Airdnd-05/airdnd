'use client'

import { useDispatch, useSelector } from 'react-redux'
import { IoMdClose } from 'react-icons/io'
import { ReactNode } from 'react'
import { setFilters, clearFilters } from '@/redux/features/filter/slice'
import { closeModal } from '@/redux/features/modal/slice'
import { resetPriceRange } from '@/redux/features/priceRange/slice'
import Portal from '@/portal/Portal'
import RangeBar from '@/components/filter/RangeBar'
import { RootState } from '@/redux/store'

function FilterModal() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.modal.isOpen)
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const handleApplyFilters = () => {
    dispatch(setFilters({}))
    dispatch(closeModal())
  }

  const handleClearFilters = () => {
    dispatch(clearFilters())
    dispatch(resetPriceRange())
  }

  const handleClose = () => {
    dispatch(closeModal())
  }

  function Header() {
    return (
      <div className='flex items-center justify-center p-6 border-b border-solid rounded-t border-slate-200'>
        <button
          onClick={handleClose}
          className='absolute p-1 transition border-0 left-9 hover:opacity-70'>
          <IoMdClose size={18} />
        </button>
        <div className='text-lg font-semibold'>필터</div>
      </div>
    )
  }

  function Body({ children }: { children: ReactNode }) {
    return <div className='relative flex-auto overflow-y-auto'>{children}</div>
  }

  function Footer() {
    return (
      <div className='flex flex-col items-center w-full gap-4 p-6 border-t'>
        <button
          onClick={handleClearFilters}
          className='w-full py-3 font-semibold text-black transition bg-white border-2 border-black rounded-lg text-md hover:opacity-80'>
          전체 해제
        </button>
        <button
          onClick={handleApplyFilters}
          className='w-full py-3 font-semibold text-white transition bg-black rounded-lg text-md hover:opacity-80'>
          숙소 1,000개 이상 표시
        </button>
      </div>
    )
  }

  return (
    <Portal>
      <div className='fixed inset-0 z-50 flex items-center justify-center outline-none bg-neutral-800/70 focus:outline-none'>
        <div className='relative w-full max-w-3xl mx-auto my-6 overflow-hidden h-5/6'>
          <div className='relative flex flex-col w-full h-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
            <Header />
            <Body>
              <RangeBar />
            </Body>
            <Footer />
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default FilterModal
