import React from 'react'

function LoginModal({ onClose }) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
      <div className='rounded bg-white p-5'>
        <h2 className='mb-4 text-lg'>로그인</h2>
        <button onClick={onClose} className='text-red-500'>
          닫기
        </button>
      </div>
    </div>
  )
}

export default LoginModal
