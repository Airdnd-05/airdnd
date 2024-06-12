'use client'

import { useState } from 'react'
import Image from 'next/image'
import HeaderNavItem from '@/components/common/Header/HeaderNavItem'
import SearchBar from '@/components/common/Header/SearchBar'
import HeaderProfile from '@/components/common/Header/HeaderProfile'
import Link from 'next/link'

function Header({ layoutStyle }) {
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
    <header className='h-[168px] border-b border-solid border-gray-200 bg-white'>
      <div className={layoutStyle}>
        <div className='grid h-[80px] grid-cols-3'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image
                alt={'HeaderLogo'}
                src={`/images/HeaderLogo.svg`}
                width={120}
                height={32}
                style={{ width: 120, height: 32 }}
                priority
              />
            </Link>
          </div>
          <nav className='flex items-center justify-center'>
            <ul className='flex items-center justify-center'>
              {MainNav.map(nav => (
                <HeaderNavItem
                  key={nav.key}
                  nav={nav}
                  selected={selected}
                  onSelected={setSelected}
                />
              ))}
            </ul>
          </nav>
          <div className='flex flex-row justify-end'>
            <div className='flex flex-row items-center'>
              <p className='mr-5 text-sm'>당신의 공간을 에어비앤비하세요.</p>
              <Image
                alt={'HeaderWorld'}
                src={`/images/HeaderWorld.svg`}
                width={18}
                height={18}
                style={{ width: 18, height: 18 }}
              />
            </div>
            <HeaderProfile />
          </div>
        </div>
        <SearchBar />
      </div>
    </header>
  )
}

export default Header
