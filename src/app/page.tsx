import FilterButton from '@/components/common/button/FilterButton'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-row items-center justify-between w-full bg-slate-300 h-[100px]">
          <div className="flex flex-row items-center justify-center w-full">캐로셀 카테고리가 위치할 자리입니다.</div>
          <div className="flex flex-row items-center justify-between bg-white">
            <FilterButton />
          </div>
        </div>
        <div className="grid items-center justify-center w-full h-[1980px] grid-cols-5 grid-rows-5 gap-3 bg-blue-300">
          이미지 카드가 나열될 자리입니다.
        </div>
      </div>
    </>
  )
}
