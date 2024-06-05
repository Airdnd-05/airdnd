'use client'

import { addDays } from 'date-fns'
import { useState, useEffect } from 'react'
import { DateRangePicker } from 'react-date-range'
import { formatYearMonthDay, getDayBetween } from '@/utils/formatingDate'

import './Calendar.css'
import { ko } from 'date-fns/locale'

function Calendar({ months }) {
  const today = new Date()
  const [isRendered, setIsRendered] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 5),
      key: 'selection',
    },
  ])

  useEffect(() => {
    setIsRendered(true)
  }, [])

  return (
    <div className='relative mb-2 w-full border-b border-solid  border-neutral-300 pb-10'>
      {/* {isRendered && (
        <div>
          <div>{getDayBetween(state[0].startDate, state[0].endDate)}박</div>
          <div>
            {formatYearMonthDay(state[0].startDate)} - {formatYearMonthDay(state[0].endDate)}
          </div>
        </div>
      )} */}

      <DateRangePicker
        minDate={today}
        onChange={item => setState([item.selection])}
        showSelectionPreview={true}
        ranges={state}
        months={months}
        direction='horizontal'
        locale={ko}
        preventSnapRefocus={true}
        monthDisplayFormat='yyyy년 MMM'
      />
    </div>
  )
}

export default Calendar
