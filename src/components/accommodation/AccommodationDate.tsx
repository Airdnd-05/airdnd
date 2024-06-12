import { getDayDiff, getDayBetween } from '@/utils/formatingDate'

export default function AccommodationDate({ start, end, idx }) {
  return (
    <>
      <div className='pb-1 text-[22px] font-semibold'>
        {start && start !== end
          ? idx === 1
            ? `숙소에서 ${getDayDiff(start, end)}박`
            : `${getDayDiff(start, end)}박`
          : idx === 0
            ? '날짜 선택'
            : '체크인 날짜를 선택해주세요.'}
      </div>
      <div className='text-sm text-neutral-500'>
        {start && start !== end
          ? getDayBetween(start, end)
          : '여행 날짜를 입력하여 정확한 요금을 확인하세요.'}
      </div>
    </>
  )
}
