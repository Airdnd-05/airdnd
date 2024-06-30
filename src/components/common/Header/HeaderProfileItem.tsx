import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { setIsOpen, setModal } from '@/redux/features/profileModalSlice'

function HeaderProfileModalItem({ section, chosenItem, setChosenItem }) {
  const dispatch = useDispatch()

  function handleClick() {
    if (section.key === 'signup') {
      dispatch(setIsOpen(true)) // 로그인 모달이 열리고
    } else {
      setChosenItem(section.key)
      dispatch(setModal()) // 프로필 모달이 닫힘
    }
  }

  return (
    <li
      className={clsx(
        'cursor-pointer px-4 py-3 text-sm transition-transform hover:rounded-lg hover:bg-gray-200',
        {
          'font-bold': chosenItem === section.key,
        },
      )}>
      {section.key === 'profile' ? (
        <Link href='/user' onClick={handleClick} className='block'>
          {section.title}
        </Link>
      ) : (
        <span className='block' onClick={handleClick}>
          {section.title}
        </span>
      )}
    </li>
  )
}

export default HeaderProfileModalItem
