'use client'

import { useDispatch } from 'react-redux'
import { IoMdClose } from 'react-icons/io'
import { ReactNode } from 'react'
import { setFilters, clearFilters } from '@/redux/features/filter/slice'
import { closeModal } from '@/redux/features/modal/slice'
import Portal from '@/portal/Portal'

function FilterModal() {
  const dispatch = useDispatch()

  const handleApplyFilters = () => {
    dispatch(setFilters({}))
    dispatch(closeModal())
  }

  const handleClearFilters = () => {
    dispatch(clearFilters())
  }

  const handleClose = () => {
    dispatch(closeModal())
  }

  function Header() {
    return (
      <div className='flex items-center justify-center rounded-t border-b-[1px] p-6'>
        <button
          onClick={handleClose}
          className='absolute left-9 border-0 p-1 transition hover:opacity-70'>
          <IoMdClose size={18} />
        </button>
        <div className='text-lg font-semibold'>필터 모달</div>
      </div>
    )
  }

  function Body({ children }: { children: ReactNode }) {
    return <div className='relative flex-auto p-6'>{children}</div>
  }

  function Footer() {
    return (
      <div className='flex w-full flex-col items-center gap-4 border-t p-6'>
        <button
          onClick={handleClearFilters}
          className='text-md w-full rounded-lg border-2 border-black bg-white py-3 font-semibold text-black transition hover:opacity-80'>
          전체 해제
        </button>
        <button
          onClick={handleApplyFilters}
          className='text-md w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:opacity-80'>
          숙소 1,000개 이상 표시
        </button>
      </div>
    )
  }

  return (
    <Portal>
      <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none'>
        <div className='relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5'>
          <div className='translate h-full translate-y-0 opacity-100 duration-300'>
            <div className='translate relative flex h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto'>
              <Header />
              <Body>
                <div>필터 상세</div>
              </Body>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default FilterModal
