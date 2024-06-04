import React from 'react'

function TravelDestination({ refCallback, handleClick, handleHover, selected, setSelected }) {
  const InputChange = event => {
    setSelected(event.target.value)
  }
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
