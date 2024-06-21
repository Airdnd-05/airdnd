import { useDispatch, useSelector } from 'react-redux'
import { decrementGuests, incrementGuests } from '@/redux/features/travelersFilterSlice'
import { RootState } from '@/redux/store'
import { TravelersType } from '@/types/Filters'
import CloseButton from './CloseButton'

export default function GuestModal({ close }) {
  const dispatch = useDispatch()
  const { adults, children, infants, pets } = useSelector(
    (state: RootState) => state.travelersFilter,
  )

  const TravelerItem = [
    { id: 1, label: '성인', description: '13세 이상', count: adults },
    { id: 2, label: '어린이', description: '2세~12세', count: children },
    { id: 3, label: '유아', description: '2세미만', count: infants },
    { id: 4, label: '반려동물', description: '보조동물을 동반하시나요?', count: pets },
  ]

  const handleDecrement = (type: TravelersType) => {
    dispatch(decrementGuests({ type }))
  }

  const handleIncrement = (type: TravelersType) => {
    dispatch(incrementGuests({ type }))
  }
  return (
    <div className='absolute right-3.5 w-11/12 rounded-sm bg-white p-1 shadow-md'>
      <div className='flex flex-col p-3'>
        {TravelerItem.map(({ id, label, description, count }) => (
          <div key={id} className={`flex items-center justify-between py-3`}>
            <div className='flex flex-col'>
              <h3 className='pb-1 text-base font-bold'>{label}</h3>
              <p className={`text-sm  ${id === 4 ? 'cursor-pointer underline' : ''}`}>
                {description}
              </p>
            </div>
            <div className='flex items-center'>
              <button
                onClick={() => handleDecrement(label as TravelersType)}
                className='h-[32px] w-[32px] rounded-full border border-solid text-gray-200'>
                -
              </button>
              <span className='px-4'>{count}</span>
              <button
                onClick={() => handleIncrement(label as TravelersType)}
                className='h-[32px] w-[32px] rounded-full border border-solid border-gray-400'>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-full justify-end'>
        <CloseButton className={'align-end p-4 font-semibold underline'} close={close} />
      </div>
    </div>
  )
}
