import React from 'react'

function CheckIn({ refCallback, handleClick, handleHover }) {
  return (
    <div
      ref={refCallback}
      onClick={() => handleClick(1)}
      onMouseEnter={() => handleHover(1, true)}
      onMouseLeave={() => handleHover(1, false)}
      className='group relative flex h-full flex-grow flex-col justify-center rounded-full px-[14px] py-[10px] hover:bg-gray-200'>
      <div className='pb-1 text-xs'>체크인</div>
      <div className=''>날짜 추가</div>
    </div>
  )
}

export default CheckIn
