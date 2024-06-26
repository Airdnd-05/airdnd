import Calendar from '@/components/common/calendar/calendar'
import RefreshDateButton from '@/components/common/calendar/RefreshDateButton'
import AccommodationDate from '@/components/detailPage/detailCalendar/AccommodationDate'
import CloseButton from './CloseButton'

export default function CalendarModal({ close, start, end, handleDateChange, handleRefreshDates }) {
  return (
    <div className='absolute left-[-340px] top-[50px] flex flex-col items-end rounded-2xl border border-solid border-neutral-200 bg-white px-2 py-4 shadow-xl'>
      <div>
        <section className='pt-2 pl-6'>
          <AccommodationDate start={start} end={end} idx={0} />
        </section>

        <Calendar
          className='mini'
          months={2}
          start={start}
          end={end}
          handleDateChange={handleDateChange}
        />
      </div>
      <div className='flex justify-between mb-1 mr-6'>
        <RefreshDateButton
          className={'mr-4 rounded-lg p-2 text-sm font-semibold underline hover:bg-neutral-100'}
          refreshDates={handleRefreshDates}>
          날짜 지우기
        </RefreshDateButton>
        <CloseButton
          close={close}
          className={'h-9 rounded-lg bg-black px-4 text-sm font-semibold text-white'}
        />
      </div>
    </div>
  )
}
