'use client'

import clsx from 'clsx'
import LoginModal from '@/modals/LoginModal'
import Portal from '@/portal/Portal'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setIsOpen } from '@/redux/features/profileModalSlice'

function HeaderProfileItem({ section, chosenItem, setChosenItem }) {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.profile.isOpen)

  function showModal() {
    dispatch(setIsOpen(true))
  }

  function closeModal() {
    dispatch(setIsOpen(false))
  }
  function handleClick() {
    if (section.key === 'signup') {
      showModal()
    }
    setChosenItem(section.key)
  }
  return (
    <>
      <li
        onClick={handleClick}
        className={clsx(
          'cursor-pointer px-4 py-3 text-sm transition-transform hover:rounded-lg hover:bg-gray-200',
          {
            'font-bold': chosenItem === section.key,
          },
        )}>
        {section.title}
      </li>
      {isOpen && (
        <Portal>
          <LoginModal onClose={closeModal} />
        </Portal>
      )}
    </>
  )
}

export default HeaderProfileItem
