import React from 'react'

function CheckOut({ refCallback, handleClick, handleHover, selectedDate }) {
  const formatDate = date => {
    const options = { month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('ko-KR', options)
    return `${formattedDate}`
  }
  return (
    <div
      ref={refCallback}
      onClick={() => handleClick(2)}
      onMouseEnter={() => handleHover(2, true)}
      onMouseLeave={() => handleHover(2, false)}
      className='group relative flex h-full flex-grow flex-col justify-center rounded-full px-[14px] py-[10px] hover:bg-gray-200'>
      <div className='pb-1 text-xs'>체크아웃</div>
      <input
        type='text'
        placeholder='날짜 추가'
        className='cursor-pointer bg-inherit focus:outline-none'
        value={selectedDate ? formatDate(selectedDate) : ''}
        readOnly
      />
    </div>
  )
}

export default CheckOut
