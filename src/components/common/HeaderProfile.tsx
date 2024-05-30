'use client'

import { useRef, useState } from 'react'
import HeaderProfileModal from '@/modals/HeaderProfileModal'
import useOnClickOutside from '@/hooks/useOnclickOutside'
import Image from 'next/image'

function HeaderProfile() {
  const [modal, setModal] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => {
    setModal(false)
  })

  const handleButtonClick = () => {
    setModal(prev => !prev)
  }

  return (
    <div className="relative flex">
      <div className="relative flex items-center ml-5 cursor-pointer flex-column" onClick={handleButtonClick}>
        <div className="w-[81px] h-[41px] flex flex-row items-center justify-around bg-white rounded-[29px] border border-solid border-gray-200 p-1px hover:shadow-md">
          <div className="inline-flex flex-col items-start justify-start gap-1">
            <div className="w-3.5 h-[0px] border border-solid border-gray-800"></div>
            <div className="w-3.5 h-[0px] border border-solid border-gray-800"></div>
            <div className="w-3.5 h-[0px] border border-solid border-gray-800"></div>
          </div>
          <Image alt={'HeaderProfile'} src={'/images/HeaderProfile.svg'} width={34} height={36} />
        </div>
      </div>
      {modal && <HeaderProfileModal ref={ref} />}
    </div>
  )
}

export default HeaderProfile
