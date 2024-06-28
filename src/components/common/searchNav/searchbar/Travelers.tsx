'use client'

import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelected } from '@/redux/features/SearchSlice'
import { setDates } from '@/redux/features/calendar/slice'
import { RootState } from '@/redux/store'
import dateToString from '@/utils/dateToString'

function Travelers({
  refCallback,
  handleClick,
  handleHover,
  setDateRange,
  selectedStart,
  selectedEnd,
}) {
  // 조건 별로 추가 시키려면 어떻게 해야할까?
  // 1. guests를 가져온 것 처럼 children, infants, pets를 들고온다.
  // 2. 함수를 한개 만들어서 배열로 값을 저장하고 조건 별로 추가했을때 다른 문구가 등장하게 하면 되지 않을까?
  const dispatch = useDispatch()
  const { adults, children, infants, pets } = useSelector(
    (state: RootState) => state.travelersFilter,
  )
  const selected = useSelector((state: RootState) => state.search.selected)
  const handleChange = () => {
    dispatch(setSelected(selected))
    setDateRange([{ selectedStart, selectedEnd, key: 'selection' }])
    dispatch({
      adults,
      children,
      infants,
      pets,
      type: '',
    })
    dispatch(
      setDates({
        start: selectedStart && dateToString(selectedStart),
        end: selectedEnd && dateToString(selectedEnd),
      }),
    )
    // console.log('지역', selected)
    // console.log('시작 날짜', selectedStart, '종료날짜', selectedEnd)
    // console.log('여행자', adults, children, infants, pets)
  }

  const addGuest = () => {
    const guest = []
    if (adults > 0 || children > 0) {
      guest.push(`게스트 ${adults + children}명`)
    }
    if (infants > 0) {
      guest.push(`유아 ${infants}명`)
    }
    if (pets > 0) {
      guest.push(`반려동물 ${pets}마리`)
    }
    return guest.join(', ')
  }

  return (
    <div
      ref={refCallback}
      onClick={() => handleClick(3)}
      onMouseEnter={() => handleHover(3, true)}
      onMouseLeave={() => handleHover(3, false)}
      className='group relative flex h-full flex-grow justify-between rounded-full px-[14px] py-[10px] hover:bg-gray-200'>
      <div className='flex flex-col justify-center'>
        <div className='pb-1 text-xs'>여행자</div>
        <input
          type='text'
          placeholder='게스트 추가'
          className='w-[143px] cursor-pointer bg-inherit focus:outline-none'
          readOnly
          value={addGuest()}
        />
      </div>
      <div className='w-[40px]'>
        <button onClick={handleChange}>
          <Image alt='HeaderSearch' src='/images/HeaderSearch.svg' width={40} height={40} />
        </button>
      </div>
    </div>
  )
}

export default Travelers
