import { setActiveIndex } from '@/redux/features/SearchSlice'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { DateRangePicker } from 'react-date-range'
import { ko } from 'date-fns/locale'

const CalenderItem = [
  {
    title: '날짜 지정',
    key: 'date',
  },
  {
    title: '월 단위',
    key: 'month',
  },
  {
    title: '유연한 일정',
    key: 'schedule',
  },
]

function CalenderModal({ handleClick, dateRange, setDateRange }) {
  const dispatch = useDispatch()
  const today = new Date()

  const handleDateChange = ranges => {
    handleClick(2)
    dispatch(setActiveIndex(2))

    if (dateRange[0].startDate === null) {
      const { startDate } = ranges.selection
      setDateRange([{ startDate, endDate: null, key: 'selection' }])
    } else {
      setDateRange([ranges.selection])
    }
  }

  return (
    <div className='absolute left-0 top-20 z-50 w-[768px] rounded-3xl bg-white py-9 shadow-lg'>
      <div className='flex items-center justify-center'>
        <div className='flex items-center justify-center gap-3 rounded-full bg-gray-200 px-5 py-1'>
          {CalenderItem.map(item => (
            <button
              key={item.key}
              className={clsx('px-4 py-2 hover:rounded-full hover:bg-gray-100', {
                'rounded-full bg-white font-bold': item.key === 'date',
              })}>
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div className='search'>
        <DateRangePicker
          minDate={today}
          onChange={handleDateChange}
          showSelectionPreview={true}
          ranges={dateRange}
          months={2}
          direction='horizontal'
          locale={ko}
          preventSnapRefocus={true}
          monthDisplayFormat='yyyy년 MMM'
        />
      </div>
    </div>
  )
}

export default CalenderModal
