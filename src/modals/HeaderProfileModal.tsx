'use client'
import HeaderProfileItem from '@/components/common/Header/HeaderProfileItem'
import { forwardRef, useState } from 'react'

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
]
const HeaderProfileModal = forwardRef<HTMLDivElement>((props, ref) => {
  const [chosenItem, setChosenItem] = useState('signup')
  return (
    <div ref={ref} className="absolute top-[80%] right-0 w-[250px] h-[200px] z-10 bg-white rounded-2xl shadow-lg">
      <ul className="flex flex-col justify-between w-full h-full">
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
})

HeaderProfileModal.displayName = 'HeaderProfileModal'

export default HeaderProfileModal
