import Calendar from '@/components/common/calendar/calendar'
import AccommodationDate from '@/components/accommodation/AccommodationDate'
import RefreshDateButton from '@/components/common/button/RefreshDateButton'

export default function ReservationCalendarModal({
  close,
  start,
  end,
  handleDateChange,
  handleRefreshDates,
}) {
  return (
    <div className='absolute left-[-340px] top-[50px] flex flex-col items-end rounded-2xl border border-solid border-neutral-200 bg-white px-2 py-4 shadow-xl'>
      <div>
        <section className='pl-6 pt-2'>
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
      <div className='mb-1 mr-6 flex justify-between'>
        {/* <button
          className='mr-4 rounded-lg p-2 text-sm font-semibold underline hover:bg-neutral-100'
          onClick={refreshDates}>
          날짜 지우기
        </button> */}
        <RefreshDateButton
          className={'mr-4 rounded-lg p-2 text-sm font-semibold underline hover:bg-neutral-100'}
          refreshDates={handleRefreshDates}>
          날짜 지우기
        </RefreshDateButton>
        <button
          className='h-9 rounded-lg bg-black px-4 text-sm font-semibold text-white'
          onClick={close}>
          닫기
        </button>
      </div>
    </div>
  )
}
