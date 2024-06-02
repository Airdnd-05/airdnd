'use client'

import clsx from 'clsx'
import { useState } from 'react'
import LoginModal from '@/modals/LoginModal'
import Portal from '@/portal/Portal'

function HeaderProfileItem({ section, chosenItem, setChosenItem }) {
  const [isOpen, setIsOpen] = useState(false)

  function showModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
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
