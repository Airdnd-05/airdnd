import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { toggleGuestFavorite } from '@/redux/features/guestFavoriteSlice'

const GuestFavoriteFilter = () => {
  const dispatch = useDispatch()
  const isFavorite = useSelector((state: RootState) => state.guestFavorite.guestFavorite)

  const handleToggle = () => {
    dispatch(toggleGuestFavorite())
  }

  function Heading(): React.ReactElement {
    return (
      <div className='flex flex-col'>
        <span className='text-2xl font-semibold'>최고 수준의 숙소</span>
      </div>
    )
  }

  return (
    <div className='p-4 border-b border-gray-300'>
      <Heading />
      <div
        className={`relative flex h-32 w-80 cursor-pointer items-center justify-center rounded-lg p-4`}
        style={{
          border: isFavorite ? '2px solid black' : '1px solid gray',
        }}
        onClick={handleToggle}>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center'>
            <p className='font-semibold'>게스트 선호</p>
            <p className='text-sm text-gray-500'>에어비앤비 게스트에게 가장 사랑받는 숙소</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestFavoriteFilter
