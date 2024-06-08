import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAmenitiesFilter } from '@/redux/features/amenitiesFilterSlice'
import { RootState } from '@/redux/store'

const amenitiesCategories: { [key: string]: string[] } = {
  필수: [
    '무선 인터넷',
    '세탁기',
    '에어컨',
    '주방',
    '건조기',
    '난방',
    '업무 전용 공간',
    'TV',
    '헤어드라이어',
    '다리미',
  ],
  특징: [
    '수영장',
    '대형 욕조',
    '무료 주차 공간',
    '전기차 충전시설',
    '아기 침대',
    '킹사이즈 침대',
    '헬스장',
    '바비큐 그릴',
    '야침식사',
    '실내 벽난로',
    '흡연 가능',
  ],
  위치: ['해변에 인접', '수변'],
  안전: ['화재경보기', '일산화탄소 경보기'],
}

interface AmenityItemProps {
  amenity: string
  checked: boolean
  handleAmenitiesChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function AmenityItem({ amenity, checked, handleAmenitiesChange }: AmenityItemProps) {
  return (
    <label key={amenity} className='inline-flex items-center flex-grow w-1/2 py-3'>
      <input
        type='checkbox'
        name='amenities'
        value={amenity}
        checked={checked}
        onChange={handleAmenitiesChange}
        className='w-6 h-6 text-blue-600 form-checkbox'
      />
      <span className='pl-2 text-gray-700'>{amenity}</span>
    </label>
  )
}

interface AmenityCategoryProps {
  title: string
  amenities: string[]
  visibleCount: number
  handleAmenitiesChange: (e: ChangeEvent<HTMLInputElement>) => void
  amenitiesFilter: string[]
}

function AmenityCategory({
  title,
  amenities,
  visibleCount,
  handleAmenitiesChange,
  amenitiesFilter,
}: AmenityCategoryProps): React.ReactElement {
  return (
    <div className='w-full'>
      <h3 className='pt-2 pb-3 mt-6 font-semibold text-gray-800 text-md'>{title}</h3>
      <div className='flex flex-wrap'>
        {amenities.slice(0, visibleCount).map(amenity => (
          <AmenityItem
            key={amenity}
            amenity={amenity}
            checked={amenitiesFilter.includes(amenity)}
            handleAmenitiesChange={handleAmenitiesChange}
          />
        ))}
      </div>
    </div>
  )
}

const initialVisibleCount = 6

function AmenitiesFilter(): React.ReactElement {
  const dispatch = useDispatch()
  const amenitiesFilter = useSelector((state: RootState) => state.amenitiesFilter.amenities) || []
  const [isExpanded, setIsExpanded] = useState(false)

  const handleAmenitiesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    if (checked) {
      dispatch(setAmenitiesFilter([...amenitiesFilter, value]))
    } else {
      dispatch(setAmenitiesFilter(amenitiesFilter.filter(v => v !== value)))
    }
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  function Heading(): React.ReactElement {
    return (
      <div className='flex flex-col'>
        <span className='text-2xl font-semibold'>편의 시설</span>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-start px-6 py-8 space-y-4 border-b border-solid border-slate-300'>
      <Heading />
      <AmenityCategory
        title='필수'
        amenities={amenitiesCategories['필수']}
        visibleCount={isExpanded ? amenitiesCategories['필수'].length : initialVisibleCount}
        handleAmenitiesChange={handleAmenitiesChange}
        amenitiesFilter={amenitiesFilter}
      />
      {isExpanded && (
        <>
          {['특징', '위치', '안전'].map(category => (
            <AmenityCategory
              key={category}
              title={category}
              amenities={amenitiesCategories[category]}
              visibleCount={amenitiesCategories[category].length}
              handleAmenitiesChange={handleAmenitiesChange}
              amenitiesFilter={amenitiesFilter}
            />
          ))}
        </>
      )}
      <div
        onClick={toggleExpand}
        className='mt-2 text-black underline cursor-pointer underline-offset-4 focus:outline-none'>
        {isExpanded ? '접기' : '더 보기'}
      </div>
    </div>
  )
}

export default AmenitiesFilter
