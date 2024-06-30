'use client'

import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { openModal } from '@/redux/features/modalSlice'
import FilterModal from '@/components/mainPage/categoryWrapper/filterModal/FilterModal'
import { RootState } from '@/redux/store'

function FilterModalButton() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.modal.isOpen)

  const handleOpenModal = () => {
    dispatch(
      openModal({
        modalProps: {},
      }),
    )
  }

  return (
    <div className='flex w-[100px] flex-shrink-0 items-center justify-center md:w-[100px]'>
      <button
        onClick={handleOpenModal}
        className='flex h-full w-20 cursor-pointer flex-col items-center justify-center rounded-xl border-[1px] border-solid border-neutral-300 transition hover:shadow-md'>
        <span className='flex flex-row items-center justify-center gap-2 px-1 py-3'>
          <Image
            alt={'FilterIcon'}
            src={`/images/FilterIcon.svg`}
            width={16}
            height={16}
            style={{ width: 16, height: 16 }}
          />
          <span className='text-xs font-semibold'>필터</span>
        </span>
      </button>
      {isOpen && <FilterModal />}
    </div>
  )
}

export default FilterModalButton
