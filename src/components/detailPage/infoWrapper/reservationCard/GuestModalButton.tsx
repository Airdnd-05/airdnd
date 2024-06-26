import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { RootState } from '@/redux/store'

export default function GuestModalButton({ open, isOpen }) {
  const { adults, children, infants, pets } = useSelector(
    (state: RootState) => state.travelersFilter,
  )
  const addGuest = () => {
    const guest = []
    if (adults > 0 || children > 0) {
      guest.push(`게스트 ${adults + children}명`)
    }
    if (infants > 0) {
      guest.push(`유아 ${infants}명`)
    }
    if (pets > 0) {
      guest.push(`반려동물 ${pets}마리`)
    }
    return guest.join(', ')
  }

  return (
    <div
      onClick={open}
      className={clsx(
        'border-t border-solid py-2 pl-2 active:rounded-lg active:border-[1.5px] active:border-black',
        isOpen ? 'rounded-lg border-[1.5px] border-black' : 'border-neutral-400',
      )}>
      <div className='mb-1 text-[10px] font-extrabold'>인원</div>
      <input
        type='text'
        placeholder='게스트 추가'
        className='w-full cursor-pointer text-sm focus:outline-none'
        readOnly
        value={addGuest()}
      />
    </div>
  )
}
