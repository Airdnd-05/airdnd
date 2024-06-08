// components/filters/BookingOptionFilter.tsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setBookingOptionFilter } from '@/redux/features/bookingOptionFilterSlice'

interface FilterOptionProps {
  title: string
  description: string
  checked: boolean
  onChange: () => void
}

const FilterOption: React.FC<FilterOptionProps> = ({ title, description, checked, onChange }) => (
  <div className='flex items-center justify-between'>
    <div>
      <div className='text-gray-900'>{title}</div>
      <div className='text-sm text-gray-500'>{description}</div>
    </div>
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' checked={checked} onChange={onChange} className='sr-only peer' />
      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
    </label>
  </div>
)

const BookingOptionFilter: React.FC = () => {
  const dispatch = useDispatch()
  const bookingOptions = useSelector((state: RootState) => state.bookingOptionFilter.bookingOptions)

  const options = [
    { title: '즉시 예약', description: '호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소' },
    {
      title: '셀프 체크인',
      description: '숙소에 도착한 후 복잡한 절차 없이 쉽게 입실할 수 있습니다.',
    },
    { title: '반려동물 동반 가능', description: '보조동물을 동반하시나요?' },
  ]

  const handleOptionChange = (option: string) => {
    const newOptions = bookingOptions.includes(option)
      ? bookingOptions.filter(opt => opt !== option)
      : [...bookingOptions, option]
    dispatch(setBookingOptionFilter(newOptions))
  }

  return (
    <div className='p-4 bg-white border-b border-solid rounded-md shadow-md border-slate-300'>
      <h2 className='mb-4 text-lg font-semibold'>예약 옵션</h2>
      <div className='space-y-4'>
        {options.map(option => (
          <FilterOption
            key={option.title}
            title={option.title}
            description={option.description}
            checked={bookingOptions.includes(option.title)}
            onChange={() => handleOptionChange(option.title)}
          />
        ))}
      </div>
    </div>
  )
}

export default BookingOptionFilter
