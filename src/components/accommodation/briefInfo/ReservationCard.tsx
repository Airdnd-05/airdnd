'use client'

import ReservationCardJson from '@data/ReservationCardJson.json'

function ReservationCard() {
  const data = ReservationCardJson

  return (
    <>
      <div className="w-[373px] shadow bg-white rounded-xl border border-solid border-neutral-200 p-6">
        <div className="Text-neutral-800 text-[22px] font-[’SF Pro’] mb-6 font-bold text-left">
          {`₩${data['fee'].toLocaleString()}`} <div className="inline text-base font-light">/박</div>
        </div>
        <div className="mb-3 text-left border border-solid rounded-lg border-neutral-400">
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
        <div className="text-zinc-600 text-sm font-normal font-['SF Pro'] my-3">
          예약 확정 전에는 요금이 청구되지 않습니다.
        </div>
        <div className="flex flex-row justify-between my-8 ">
          <div className="underline">{`₩${data['fee'].toLocaleString()} x ${data['days']}박`}</div>
          <div>{`₩${(data['fee'] * data['days']).toLocaleString()}`}</div>
        </div>
        <hr />
        <div className="flex flex-row justify-between mb-1 font-semibold mt-7">
          <div>총 합계</div>
          <div>{`₩${(data['fee'] * data['days']).toLocaleString()}`}</div>
        </div>
      </div>
    </>
  )
}

export default ReservationCard
