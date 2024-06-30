import { setActiveIndex } from '@/redux/features/SearchSlice'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

const locationInfo = [
  {
    location_name: '서울',
    desc: '대한민국',
  },
  {
    location_name: '부산',
    desc: '우동 · 해운대 · 지역',
  },
  {
    location_name: '속초',
    desc: '대한민국 · 강원도 · 도시',
  },
  {
    location_name: '강릉',
    desc: '대한민국 · 강원도 · 도시',
  },
  {
    location_name: '전주',
    desc: '대한민국 · 전라북도 · 도시',
  },
  {
    location_name: '대구',
    desc: '대한민국 · 경상북도 · 도시',
  },
  {
    location_name: '경주',
    desc: '대한민국 · 경상북도 · 도시',
  },
  {
    location_name: '여수',
    desc: '대한민국 · 전라남도 · 도시',
  },
  {
    location_name: '서귀포',
    desc: '대한민국 · 서귀포시 · 도시',
  },
  {
    location_name: '대전',
    desc: '대한민국 · 대전광역시 · 도시',
  },
  {
    location_name: '제주도',
    desc: '대한민국 · 제주특별자치도 · 도시',
  },
  {
    location_name: '인천',
    desc: '대한민국 · 인천광역시 · 도시',
  },
]

function SearchResultsModal({ handleClick }) {
  const dispatch = useDispatch()
  const selected = useSelector((state: RootState) => state.search.selected)
  console.log('selected ', selected)
  const filterLocation = locationInfo.filter(location => location.location_name.includes(selected))
  console.log('filterLocation ', filterLocation)

  const handleItemClick = locationName => {
    handleClick(1, locationName)
    dispatch(setActiveIndex(1))
  }
  return (
    <div className='absolute left-0 top-20 z-50 rounded-2xl bg-white px-4 py-4 shadow-lg'>
      <div className='flex w-[330px] flex-col'>
        {filterLocation.length > 0 ? (
          filterLocation.map(location => (
            <div
              key={location.location_name}
              onClick={() => handleItemClick(location.location_name)}
              className='flex cursor-pointer gap-4 rounded-xl px-4 py-2 hover:bg-gray-100'>
              <div className='rounded-xl bg-gray-200 p-[13px]'>
                <Image alt={'locationLogo'} src={`/images/location.svg`} width={22} height={22} />
              </div>
              <div className='flex grow flex-col justify-center'>
                <div className='text-base'>{location.location_name}</div>
                <div className='text-xs text-gray-600'>{location.desc}</div>
              </div>
            </div>
          ))
        ) : (
          <div>일치하는 결과가 없습니다.</div>
        )}
      </div>
    </div>
  )
}

export default SearchResultsModal
