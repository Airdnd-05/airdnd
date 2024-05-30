import { forwardRef } from 'react'

const HeaderProfileInfo = [
  {
    title: '회원가입',
  },
  {
    title: '로그인',
  },
  {
    title: '당신의 공간을 에어비앤비하세요',
  },
  {
    title: '도움말 센터',
  },
]
const HeaderProfileModal = forwardRef((props, ref) => (
  <div ref={ref} className="absolute top-[80%] right-0 z-10 w-[250px] h-[200px] bg-white rounded-2xl shadow-lg">
    <ul className="flex flex-col justify-between w-full h-full">
      {HeaderProfileInfo.map((section, index) => (
        <li
          key={index}
          className={`text-sm py-3 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-lg transition-all ${index === 0 ? 'font-bold' : ''}`}>
          {section.title}
        </li>
      ))}
    </ul>
  </div>
))

HeaderProfileModal.displayName = 'HeaderProfileModal'

export default HeaderProfileModal
