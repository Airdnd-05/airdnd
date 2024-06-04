import React from 'react'

function CheckOut({ refCallback, handleClick, handleHover }) {
  return (
    <div
      ref={refCallback}
      onClick={() => handleClick(2)}
      onMouseEnter={() => handleHover(2, true)}
      onMouseLeave={() => handleHover(2, false)}
      className='group relative flex h-full flex-grow flex-col justify-center rounded-full px-[14px] py-[10px] hover:bg-gray-200'>
      <div className='pb-1 text-xs'>체크아웃</div>
      <div className='relative z-10'>날짜 추가</div>
    </div>
  )
}

export default CheckOut
