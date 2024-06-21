import { formatymd } from '@/utils/formatingDate'
import clsx from 'clsx'

export default function CalendarModalButton({ open, start, end, isOpen }) {
  return (
    <div
      className={clsx(
        'relative z-[1] flex cursor-pointer flex-row rounded-lg active:border-[1.5px] active:border-solid',
        isOpen && 'border border-solid border-neutral-400',
      )}
      onClick={open}>
      <div
        className={clsx(
          'flex-1 py-2 pl-2',
          !isOpen && 'border-r border-solid border-neutral-400',
          isOpen && !start && 'border-neutral rounded-lg border-[1.5px] border-solid',
        )}>
        <div className='mb-1 text-[10px] font-extrabold'>체크인</div>
        <div className='text-sm'>
          {start ? (
            <div>{formatymd(start)}</div>
          ) : (
            <div className='text-neutral-500'>날짜 추가</div>
          )}
        </div>
      </div>
      <div
        className={clsx(
          'flex-1 py-2 pl-2',
          isOpen && end && 'rounded-lg border-[1.5px] border-solid border-black',
        )}>
        <div className='mb-1 text-[10px] font-extrabold'>체크아웃</div>
        <div className='text-sm'>
          {end && start !== end ? (
            <div>{formatymd(end)}</div>
          ) : (
            <div className='text-neutral-500'>날짜 추가</div>
          )}
        </div>
      </div>
    </div>
  )
}
