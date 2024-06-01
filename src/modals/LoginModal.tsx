import React from 'react'

function LoginModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-5 rounded">
        <h2 className="text-lg mb-4">로그인</h2>
        <button onClick={onClose} className="text-red-500">
          닫기
        </button>
      </div>
    </div>
  )
}

export default LoginModal
