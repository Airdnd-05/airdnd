import { setSelected } from '@/redux/features/SearchSlice'
import { RootState } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function TravelDestination({ refCallback, handleClick, handleHover }) {
  const dispatch = useDispatch()
  const selected = useSelector((state: RootState) => state.search.selected)
  const InputChange = event => {
    const InputValue = event.target.value
    dispatch(setSelected(InputValue))
    handleClick(0)
  }

  // console.log('selected:', selected)
  return (
    <div
      ref={refCallback}
      onClick={() => handleClick(0)}
      onMouseEnter={() => handleHover(0, true)}
      onMouseLeave={() => handleHover(0, false)}
      className='group relative flex h-full flex-grow flex-col justify-center rounded-full px-2 pl-[14px] hover:bg-gray-200'>
      <div className='pb-1 text-xs'>여행지</div>
      <input
        type='search'
        name='q'
        placeholder='여행지 검색'
        className='w-full bg-inherit focus:outline-none'
        value={selected}
        onChange={InputChange}
      />
    </div>
  )
}

export default TravelDestination
