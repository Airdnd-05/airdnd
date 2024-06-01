'use client'
import { useRef, useState } from 'react'
import useOnClickOutside from '@/hooks/useOnclickOutside'
import HeaderProfileModal from '@/modals/HeaderProfileModal'
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
      <button type="button" className="relative flex items-center ml-5 cursor-pointer flex-column">
        <div
          className="w-[81px] h-[41px] flex flex-row items-center justify-around bg-white rounded-[29px] border border-solid border-gray-200 p-1px hover:shadow-md"
          onClick={handleButtonClick}>
          <div className="inline-flex flex-col items-start justify-start gap-1">
            <div className="w-3.5 h-[0px] border border-solid border-gray-800"></div>
            <div className="w-3.5 h-[0px] border border-solid border-gray-800"></div>
            <div className="w-3.5 h-[0px] border border-solid border-gray-800"></div>
          </div>
          <Image alt={'HeaderProfile'} src={'/images/HeaderProfile.svg'} width={34} height={36} />
        </div>
      </button>
      {modal && <HeaderProfileModal ref={ref} />}
    </div>
  )
}

export default HeaderProfile
