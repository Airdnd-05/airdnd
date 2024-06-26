import '@/components/common/calendar/calendar.css'
import { ko } from 'date-fns/locale'
import { DateRangePicker } from 'react-date-range'

function Calendar({ className, months, start, end, handleDateChange }) {
  const startDate = start ? new Date(start) : null
  const endDate = end ? new Date(end) : new Date(1)
  const shownDate = start ? new Date(start) : new Date()

  return (
    <DateRangePicker
      className={className}
      minDate={new Date()}
      shownDate={shownDate}
      onChange={item => handleDateChange(item)}
      showSelectionPreview={true}
      ranges={[
        {
          startDate,
          endDate,
          key: 'selection',
        },
      ]}
      months={months}
      direction='horizontal'
      locale={ko}
      preventSnapRefocus={true}
      monthDisplayFormat='yyyy년 MMM'
    />
  )
}

export default Calendar
