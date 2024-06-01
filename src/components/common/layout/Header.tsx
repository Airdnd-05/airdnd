'use client'
import clsx from 'clsx'
import { useState } from 'react'
import HeaderNavItem from '@/components/common/Header/HeaderNavItem'
import SearchBar from '@/components/common/Header/SearchBar'
import HeaderProfile from '@/components/common/Header/HeaderProfile'
import Image from 'next/image'

function Header() {
  const [selected, setSelected] = useState('accommodation')
  const MainNav = [
    {
      key: 'accommodation',
      title: '숙소',
    },
    {
      key: 'experience',
      title: '체험',
    },
    {
      key: 'online',
      title: '온라인 체험',
    },
  ]
  return (
    <>
      <header className="h-[168px] bg-white border-b border-solid border-gray-200 px-20">
        <div className="grid grid-cols-3 h-[80px] mx-[8.5rem]">
          <div className="flex">
            {/* <img className="w-[102px]" src={HeaderLogo} /> */}
            <Image alt={'HeaderLogo'} src={`/images/HeaderLogo.svg`} width={102} height={32} />
          </div>
          <nav className="flex items-center justify-center">
            <ul className="flex justify-center items-center">
              {MainNav.map(nav => (
                <HeaderNavItem nav={nav} selected={selected} onSelected={setSelected} key={nav.key} />
              ))}
            </ul>
          </nav>
          <div className="flex flex-row justify-end">
            <div className="flex flex-row items-center">
              <p className="mr-5 text-sm">당신의 공간을 에어비앤비하세요.</p>
              <Image alt={'HeaderWorld'} src={`/images/HeaderWorld.svg`} width={18} height={18} />
              {/* <img src={HeaderWorld} /> */}
            </div>
            <HeaderProfile />
          </div>
        </div>
        <SearchBar />
      </header>
    </>
  )
}

export default Header
