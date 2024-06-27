'use client'

import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import HeaderProfileModal from '@/components/common/user/HeaderProfileModal'
import { RootState } from '@/redux/store'
import { setModal } from '@/redux/features/profileModalSlice'
import Portal from '@/portal/Portal'
import LoginModal from '../user/LoginModal'

function HeaderProfileButton() {
  const dispatch = useDispatch()

  const modal = useSelector((state: RootState) => state.profile.modal)
  const isOpen = useSelector((state: RootState) => state.profile.isOpen)

  const handleButtonClick = () => {
    dispatch(setModal())
  }

  return (
    <div className='relative flex'>
      <button type='button' className='flex-column relative ml-5 flex cursor-pointer items-center'>
        <div
          className='p-1px flex h-[41px] w-[81px] flex-row items-center justify-around rounded-[29px] border border-solid border-gray-200 bg-white hover:shadow-md'
          onClick={handleButtonClick}>
          <div className='inline-flex flex-col items-start justify-start gap-1'>
            <div className='h-[0px] w-3.5 border border-solid border-gray-800'></div>
            <div className='h-[0px] w-3.5 border border-solid border-gray-800'></div>
            <div className='h-[0px] w-3.5 border border-solid border-gray-800'></div>
          </div>
          <Image alt={'HeaderProfile'} src={'/images/HeaderProfile.svg'} width={34} height={36} />
        </div>
      </button>
      {modal && <HeaderProfileModal />}
      {isOpen && ( // isOpen을 HeaderProfileModal 안에서 띄우기로 해놨었는데 그럼 종속성 때문에 안됨 그러니까 바깥에 빼야함!!!!!1
        <Portal>
          <LoginModal />
        </Portal>
      )}
    </div>
  )
}

export default HeaderProfileButton
