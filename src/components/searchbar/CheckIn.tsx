import React from 'react'

function CheckIn({ refCallback, handleClick, handleHover, selectedDate }) {
  const formatDate = date => {
    // const options = { month: 'long', day: 'numeric' }
    const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
      month: 'long',
      day: 'numeric',
    })
    return `${formattedDate}`
  }

  return (
    <div
      ref={refCallback}
      onClick={() => handleClick(1)}
      onMouseEnter={() => handleHover(1, true)}
      onMouseLeave={() => handleHover(1, false)}
      className='group relative flex h-full flex-grow cursor-pointer flex-col justify-center rounded-full px-[14px] py-[10px] hover:bg-gray-200'>
      <div className='pb-1 text-xs'>체크인</div>
      <input
        type='text'
        placeholder='날짜 추가'
        className='w-[92.5px] cursor-pointer bg-inherit focus:outline-none'
        value={selectedDate ? formatDate(selectedDate) : ''}
        readOnly
      />
    </div>
  )
}

export default CheckIn
