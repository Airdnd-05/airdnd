import CheckIn from '@/components/searchbar/CheckIn'
import CheckOut from '@/components/searchbar/CheckOut'
import TravelDestination from '@/components/searchbar/TravelDestination'
import Travelers from '@/components/searchbar/Travelers'
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
        <TravelDestination
          refCallback={el => {
            MenuRef.current[0] = el
          }}
          handleClick={handleClick}
          handleHover={handleHover}
        />
        <div className='h-5 border-r border-solid border-gray-300'></div>

        <CheckIn
          refCallback={el => {
            MenuRef.current[1] = el
          }}
          handleClick={handleClick}
          handleHover={handleHover}
        />
        <div className='h-5 border-r border-solid border-gray-300'></div>

        <CheckOut
          refCallback={el => {
            MenuRef.current[2] = el
          }}
          handleClick={handleClick}
          handleHover={handleHover}
        />
        <div className='h-5 border-r border-solid border-gray-300'></div>

        <Travelers
          refCallback={el => {
            MenuRef.current[3] = el
          }}
          handleClick={handleClick}
          handleHover={handleHover}
        />
      </div>
    </div>
  )
}

export default SearchBar
