'use client'

import { useState } from 'react'
import Image from 'next/image'

function HeartButton() {
  const [valid, setValid] = useState(false)
  return (
    <button
      className="flex p-2 hover:bg-gray-200"
      onClick={() => {
        setValid(!valid)
      }}>
      {valid ? (
        <Image alt={'useHeartIcon'} src={`/images/useHeartIcon.svg`} width={16} height={16} className="m-1" />
      ) : (
        <Image alt={'unUseHeartIcon'} src={`/images/unUseHeartIcon.svg`} width={16} height={16} className="m-1" />
      )}
      <div className="underline">{valid ? '저장 목록' : '저장'}</div>
    </button>
  )
}

export default HeartButton
