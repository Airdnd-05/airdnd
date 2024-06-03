import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '@/redux/filterModal/slice'

const FilterModal = () => {
  const isOpen = useSelector(state => state.filterModal.isOpen)
  const dispatch = useDispatch()

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='rounded bg-white p-4'>
        <button onClick={() => dispatch(closeModal())}>닫기</button>
        <h2>필터 모달</h2>
      </div>
    </div>,
    document.body,
  )
}

export default FilterModal
