import Image from 'next/image'
import React from 'react'

function Travelers({ refCallback, handleClick, handleHover }) {
  return (
    <div
      ref={refCallback}
      onClick={() => handleClick(3)}
      onMouseEnter={() => handleHover(3, true)}
      onMouseLeave={() => handleHover(3, false)}
      className='group relative flex h-full flex-grow justify-between rounded-full px-[14px] py-[10px] hover:bg-gray-200'>
      <div className='flex flex-col justify-center'>
        <div className='pb-1 text-xs'>여행자</div>
        <div className=''>게스트 추가</div>
      </div>
      <div>
        <button>
          <Image
            alt='HeaderSearch'
            src='/images/HeaderSearch.svg'
            width={40}
            height={40}
            style={{ width: 40, height: 40 }}
          />
        </button>
      </div>
    </div>
  )
}

export default Travelers
