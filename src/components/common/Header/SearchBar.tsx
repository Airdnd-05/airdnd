import Image from 'next/image'
import { useRef, useState } from 'react'

/**
 * 검색 바 컴포넌트. 4개의 메뉴 아이템을 포함
 * @component
 * @example
 * return (
 *   <SearchBar />
 * )
 */
function SearchBar() {
  const MenuRef = useRef([]) // ref를 여러번 사용해야할 때는 배열에 담아서 사용해 보자
  //   메뉴 요소의 참조를 저장하는 Ref 배열
  const [activeIndex, setActiveIndex] = useState(null)

  /**
   * 메뉴 아이템 클릭 이벤트를 처리하고 스타일을 업데이트
   * @param {number} index - 클릭된 메뉴 아이템의 인덱스.
   */

  const handleClick = index => {
    setActiveIndex(index)
    MenuRef.current.forEach((ref, i) => {
      const MenuElement = ref
      const ParentMenuElement = MenuElement.parentElement // 메뉴들의 상위 div
      if (i === index) {
        MenuElement.style.backgroundColor = '#fff' // 클릭 시 흰색 배경으로
        MenuElement.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)' // box-shadow 추가
      } else {
        MenuElement.style.backgroundColor = '#e5e7eb' // 나머지 메뉴는 회색 배경으로
        MenuElement.style.boxShadow = 'none'
        ParentMenuElement.style.backgroundColor = '#e5e7eb' // 상위 div 배경을 변경
      }
    })
  }
  const handleHover = (index, isHover) => {
    if (index !== activeIndex && activeIndex !== null) {
      MenuRef.current[index].style.backgroundColor = isHover ? '#dddd' : ''
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='flex h-[66px] w-full max-w-3xl items-center rounded-full border border-solid border-gray-200 bg-white text-sm shadow'>
        <div
          ref={el => {
            MenuRef.current[0] = el
          }}
          onClick={() => handleClick(0)}
          onMouseEnter={() => handleHover(0, true)}
          onMouseLeave={() => handleHover(0, false)}
          className='group relative flex h-full flex-grow flex-col justify-center rounded-full px-2 pl-[14px] hover:bg-gray-200'>
          <div className='pb-1 text-xs'>여행지</div>
          <input
            type='search'
            name='q'
            placeholder='여행지 검색'
            className='w-full bg-inherit font-bold focus:outline-none'
          />
        </div>
        <div className='h-5 border-r border-solid border-gray-300'></div>

        <div
          ref={el => {
            MenuRef.current[1] = el
          }}
          onClick={() => handleClick(1)}
          onMouseEnter={() => handleHover(1, true)}
          onMouseLeave={() => handleHover(1, false)}
          className='display-block group relative flex h-full flex-grow flex-col justify-center rounded-full px-[14px] py-[10px] hover:bg-gray-200'>
          <div className='pb-1 text-xs'>체크인</div>
          <div className=''>날짜 추가</div>
        </div>
        <div className='h-5 border-r border-solid border-gray-300'></div>

        <div
          ref={el => {
            MenuRef.current[2] = el
          }}
          onClick={() => handleClick(2)}
          onMouseEnter={() => handleHover(2, true)}
          onMouseLeave={() => handleHover(2, false)}
          className='display-block group relative flex h-full flex-grow flex-col justify-center rounded-full px-[14px] py-[10px] hover:bg-gray-200'>
          <div className='pb-1 text-xs'>체크아웃</div>
          <div className='relative z-10'>날짜 추가</div>
        </div>
        <div className='h-5 border-r border-solid border-gray-300'></div>

        <div
          ref={el => {
            MenuRef.current[3] = el
          }}
          onClick={() => handleClick(3)}
          onMouseEnter={() => handleHover(3, true)}
          onMouseLeave={() => handleHover(3, false)}
          className='display-block group relative flex h-full flex-grow justify-between rounded-full px-[14px] py-[10px] hover:bg-gray-200'>
          <div className='flex flex-col justify-center'>
            <div className='pb-1 text-xs'>여행자</div>
            <div className=''>게스트 추가</div>
          </div>
          <div>
            <button>
              <Image
                alt={'HeaderSearch'}
                src={`/images/HeaderSearch.svg`}
                width={40}
                height={40}
                style={{ width: 40, height: 40 }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
