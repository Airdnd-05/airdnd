'use client'

import { useState } from 'react'
import HeaderProfileItem from '@/components/common/Header/HeaderProfileItem'
import Link from 'next/link'

const HeaderProfileInfo = [
  {
    key: 'signup',
    title: '회원가입',
  },
  {
    key: 'login',
    title: '로그인',
  },
  {
    key: 'hostspace',
    title: '당신의 공간을 에어비앤비하세요',
  },
  {
    key: 'helpcenter',
    title: '도움말 센터',
  },
  {
    key: 'profile',
    title: '계정',
  },
]
function HeaderProfileModal() {
  const [chosenItem, setChosenItem] = useState('signup')

  return (
    <div className='absolute right-0 top-[65px] z-10 h-[250px] w-[250px] rounded-2xl bg-white shadow-lg'>
      <ul className='flex h-full w-full flex-col justify-between'>
        {HeaderProfileInfo.map(section => (
          <HeaderProfileItem
            key={section.key}
            section={section}
            chosenItem={chosenItem}
            setChosenItem={setChosenItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default HeaderProfileModal
