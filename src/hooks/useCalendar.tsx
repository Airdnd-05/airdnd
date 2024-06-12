import { useDispatch, useSelector } from 'react-redux'
import { setDates, refreshDates } from '@/redux/features/calendar/slice'
import dateToString from '@/utils/dateToString'

type calendarType = {
  calendar: {
    startDate: string
    endDate: string
  }
}

function useCalendar() {
  const dispatch = useDispatch()

  const start = useSelector((state: calendarType) => state.calendar.startDate)
  const end = useSelector((state: calendarType) => state.calendar.endDate)

  function handleDateChange(item) {
    const { startDate, endDate } = item.selection
    dispatch(
      setDates({
        start: startDate && dateToString(startDate),
        end: endDate && dateToString(endDate),
      }),
    )
  }

  function handleRefreshDates() {
    dispatch(refreshDates())
  }

  return { start, end, handleDateChange, handleRefreshDates }
}

export default useCalendar
