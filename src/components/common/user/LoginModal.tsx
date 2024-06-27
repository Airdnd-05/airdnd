import { setIsOpen } from '@/redux/features/profileModalSlice'
import { RootState } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function LoginModal() {
  const dispatch = useDispatch()

  const isOpen = useSelector((state: RootState) => state.profile.isOpen)

  function closeModal() {
    if (isOpen) {
      dispatch(setIsOpen(false))
    }
  }

  const LoginItem = [
    {
      title: '네이버로 로그인하기',
      key: 'naver',
    },
    {
      title: '구글로 로그인하기',
      key: 'google',
    },
  ]
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-25'>
      <div className='w-[500px] rounded-lg bg-white'>
        <header className='flex w-full items-center justify-between border-b border-solid border-gray-200 p-4 pb-5'>
          <button onClick={closeModal} className='text-red-500'>
            X
          </button>
          <div className='flex-grow text-center font-bold'>로그인 또는 회원가입</div>
        </header>
        <section className='flex flex-col items-center justify-center p-4'>
          <div className='mb-3 w-full self-start text-xl'>에어비앤비에 오신 것을 환영합니다.</div>
          <div className='flex w-full flex-col self-start'>
            <input
              type='text'
              placeholder='아이디를 입력해주세요.'
              className='rounded-t-xl border p-4'
            />
            <input
              type='password'
              placeholder='비밀번호를 입력해주세요.'
              className='rounded-b-xl border p-4'
            />
            <p className='mt-3 text-xs'>
              전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이
              부과됩니다.
            </p>
            <span className='mb-4 text-xs text-gray-400 underline'>개인정보 처리방침</span>
            <button className='rounded-md bg-rose-600 py-4 text-white'>계속</button>
          </div>
          <div className='my-4 flex w-full flex-col items-center justify-center'>
            <div className='mb-2 flex w-full items-center'>
              <div className='w-full flex-1 border-t border-solid border-gray-200'></div>
              <div className='mx-4 text-xs text-gray-400'>또는</div>
              <div className='w-full flex-1 border-t border-solid border-gray-200'></div>
            </div>
            {LoginItem.map(item => (
              <button
                className='my-2 w-full rounded-md border border-black py-3 text-sm hover:bg-gray-100'
                key={item.key}>
                {item.title}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default LoginModal
