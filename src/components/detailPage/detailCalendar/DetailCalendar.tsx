'use client'

import useCalendar from '@/hooks/useCalendar'
import Calendar from '@/components/common/calendar/calendar'
import AccommodationDate from '@/components/detailPage/detailCalendar/AccommodationDate'
import RefreshDateButton from '../../common/calendar/RefreshDateButton'

export default function DetailCalendar() {
  const { start, end, handleDateChange, handleRefreshDates } = useCalendar()
  return (
    <div className='border-b border-solid border-neutral-300 py-12'>
      <AccommodationDate start={start} end={end} idx={1} />
      <Calendar
        className=''
        months={3}
        start={start}
        end={end}
        handleDateChange={handleDateChange}
      />
      <div className='flex justify-end'>
        <RefreshDateButton
          className={'mr-4 rounded-lg p-2 text-sm font-semibold underline hover:bg-neutral-100'}
          refreshDates={handleRefreshDates}>
          날짜 지우기
        </RefreshDateButton>
      </div>
    </div>
  )
}
