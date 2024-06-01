'use client'

import ReservationCardJson from '@data/ReservationCardJson.json'
import { formatWithComma, totalPrice, priceWithDays } from '@/utils/formatingPrice'

function ReservationCard() {
  const data = ReservationCardJson

  return (
    <>
      <div className=" shadow-lg bg-white rounded-xl border border-solid border-neutral-200 p-5 sticky top-8 left-0 mb-8">
        <div className="Text-neutral-800 text-[22px] font-[’SF Pro’] mb-6 font-semibold text-left">
          {formatWithComma(data.fee)} <div className="inline text-base font-normal">/박</div>
        </div>
        <div className="mb-3 text-left border border-solid border-neutral-400 rounded-[8px]">
          <div className="flex flex-row">
            <div className="flex-1 py-3 pl-2 border-r border-solid border-neutral-400">
              <div className="text-[10px] font-extrabold mb-1">체크인</div>
              <div className="text-sm">{data['checkIn']}</div>
            </div>
            <div className="flex-1 py-3 pl-2">
              <div className="text-[10px] font-extrabold mb-1">체크아웃</div>
              <div className="text-sm">{data['checkOut']}</div>
            </div>
          </div>
          <div className="py-3 pl-2 border-t border-solid border-neutral-400">
            <div className="text-[10px] font-extrabold mb-1">인원</div>
            <div className="text-sm">{`게스트 ${data['guests']}명`}</div>
          </div>
        </div>
        <button className="w-full py-4 my-1 text-white rounded-lg bg-rose-600"> 예약하기 </button>
        <div className="text-center text-zinc-600 text-sm font-normal font-['SF Pro'] my-3">
          예약 확정 전에는 요금이 청구되지 않습니다.
        </div>
        <div className="overflow-hidden flex flex-row justify-between my-6 ">
          <div className="underline">{priceWithDays(data.fee, data.days)}</div>
          <div>{totalPrice(data.fee, data.days)}</div>
        </div>
        <hr />
        <div className="overflow-hidden flex flex-row justify-between mb-1 font-semibold mt-6">
          <div>총 합계</div>
          <div>{totalPrice(data.fee, data.days)}</div>
        </div>
      </div>
    </>
  )
}

export default ReservationCard
