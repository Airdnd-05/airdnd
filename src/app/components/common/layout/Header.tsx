import HeaderLogo from '@icons/HeaderLogo.svg'
import HeaderSearch from '@icons/HeaderSearch.svg'
import HeaderWorld from '@icons/HeaderWorld.svg'
import HeaderProfile from '@components/common/HeaderProfile'

function Header() {
  return (
    <>
      <header className="h-[80px] bg-white border-b border-solid border-gray-200 px-20">
        <div className="grid grid-cols-3 h-[80px] mx-[8.5rem]">
          <div className="flex">
            <HeaderLogo className="w-[102px]" />
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-full shadow border border-solid border-gray-200 flex justify-center items-center gap-1 p-1 h-[50px] text-sm">
              <button className="ml-3">어디든지</button>
              <span className="w-6 h-[0px] rotate-90 border border-solid border-gray-200 inline"></span>
              <button>언제든 일주일</button>
              <span className="w-6 h-[0px] rotate-90 border border-solid border-gray-200"></span>
              <button>게스트 추가</button>
              <button className="ml-3 mr-1">
                <HeaderSearch />
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <div className="flex flex-row items-center">
              <p className="mr-5 text-sm">당신의 공간을 에어비앤비하세요.</p>
              <HeaderWorld />
            </div>
            <HeaderProfile />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
