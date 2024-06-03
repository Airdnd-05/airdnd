'use client'

import ReservationCardJson from '@data/ReservationCardJson.json'
import { formatWithComma, totalPrice, priceWithDays } from '@/utils/formatingPrice'

function ReservationCard() {
  const data = ReservationCardJson

  return (
    <>
      <div className='sticky left-0 top-8 mb-8 rounded-xl border border-solid border-neutral-200 bg-white p-5 shadow-lg'>
        <div className='Text-neutral-800 font-[’SF Pro’] mb-6 text-left text-[22px] font-semibold'>
          {formatWithComma(data.fee)} <div className='inline text-base font-normal'>/박</div>
        </div>
        <div className='mb-3 rounded-[8px] border border-solid border-neutral-400 text-left'>
          <div className='flex flex-row'>
            <div className='flex-1 border-r border-solid border-neutral-400 py-3 pl-2'>
              <div className='mb-1 text-[10px] font-extrabold'>체크인</div>
              <div className='text-sm'>{data.checkIn}</div>
            </div>
            <div className='flex-1 py-3 pl-2'>
              <div className='mb-1 text-[10px] font-extrabold'>체크아웃</div>
              <div className='text-sm'>{data.checkOut}</div>
            </div>
          </div>
          <div className='border-t border-solid border-neutral-400 py-3 pl-2'>
            <div className='mb-1 text-[10px] font-extrabold'>인원</div>
            <div className='text-sm'>{`게스트 ${data.guests}명`}</div>
          </div>
        </div>
        <button className='my-1 w-full rounded-lg bg-rose-600 py-4 text-white'> 예약하기 </button>
        <div className="font-['SF Pro'] my-3 text-center text-sm font-normal text-zinc-600">
          예약 확정 전에는 요금이 청구되지 않습니다.
        </div>
        <div className='my-6 flex flex-row justify-between overflow-hidden'>
          <div className='underline'>{priceWithDays(data.fee, data.days)}</div>
          <div>{totalPrice(data.fee, data.days)}</div>
        </div>
        <hr />
        <div className='mb-1 mt-6 flex flex-row justify-between overflow-hidden font-semibold'>
          <div>총 합계</div>
          <div>{totalPrice(data.fee, data.days)}</div>
        </div>
      </div>
    </>
  )
}

export default ReservationCard
