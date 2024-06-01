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
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-full shadow border border-solid border-gray-200 flex items-center h-[66px] text-sm w-full max-w-3xl">
        <div
          ref={el => {
            MenuRef.current[0] = el
          }}
          onClick={() => handleClick(0)}
          onMouseEnter={() => handleHover(0, true)}
          onMouseLeave={() => handleHover(0, false)}
          className="flex flex-col justify-center flex-grow px-2 relative group hover:bg-gray-200 rounded-full h-full pl-[14px]">
          <div className="text-xs pb-1">여행지</div>
          <input
            type="search"
            name="q"
            placeholder="여행지 검색"
            className="w-full focus:outline-none bg-inherit font-bold"
          />
        </div>
        <div className="border-r border-gray-300 border-solid h-5"></div>

        <div
          ref={el => {
            MenuRef.current[1] = el
          }}
          onClick={() => handleClick(1)}
          onMouseEnter={() => handleHover(1, true)}
          onMouseLeave={() => handleHover(1, false)}
          className="relative group flex flex-col justify-center display-block py-[10px] px-[14px] flex-grow hover:bg-gray-200 rounded-full h-full">
          <div className="text-xs pb-1 ">체크인</div>
          <div className="">날짜 추가</div>
        </div>
        <div className="border-r border-gray-300 border-solid h-5"></div>

        <div
          ref={el => {
            MenuRef.current[2] = el
          }}
          onClick={() => handleClick(2)}
          onMouseEnter={() => handleHover(2, true)}
          onMouseLeave={() => handleHover(2, false)}
          className="relative group flex flex-col justify-center display-block py-[10px] px-[14px] flex-grow hover:bg-gray-200 rounded-full h-full">
          <div className="text-xs pb-1">체크아웃</div>
          <div className="relative z-10">날짜 추가</div>
        </div>
        <div className="border-r border-gray-300 border-solid h-5"></div>

        <div
          ref={el => {
            MenuRef.current[3] = el
          }}
          onClick={() => handleClick(3)}
          onMouseEnter={() => handleHover(3, true)}
          onMouseLeave={() => handleHover(3, false)}
          className="flex justify-between relative group display-block py-[10px] px-[14px] flex-grow hover:bg-gray-200 rounded-full h-full">
          <div className="flex flex-col justify-center">
            <div className="text-xs pb-1">여행자</div>
            <div className="">게스트 추가</div>
          </div>
          <div>
            <button>
              <Image alt={'HeaderSearch'} src={`/images/HeaderSearch.svg`} width={40} height={40} />
              {/* <img src={HeaderSearch} alt="Search Icon" className="w-[40px]" /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
