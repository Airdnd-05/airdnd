'use client'

import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { setIsOpen } from '@/redux/features/profileModalSlice'

function HeaderProfileModalItem({ section, chosenItem, setChosenItem }) {
  const dispatch = useDispatch()

  function showModal() {
    dispatch(setIsOpen(true))
  }

  function handleClick() {
    if (section.key === 'signup') {
      showModal()
    }
    setChosenItem(section.key)
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
        <Link href='/profile' onClick={handleClick} className='block'>
          {section.title}
        </Link>
      ) : (
        <li onClick={handleClick}>{section.title}</li>
      )}
    </li>
  )
}

export default HeaderProfileModalItem
