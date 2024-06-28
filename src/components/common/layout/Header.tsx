'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import HeaderNavItem from '@/components/common/Header/HeaderNavItem'
import SearchBar from '@/components/common/searchNav/SearchBar'
import HeaderProfileButton from '@/components/common/Header/HeaderProfileButton'

function Header({ layoutStyle, pathName }) {
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
  ]
  return (
    <header
      className={clsx('border-b border-solid border-gray-200 bg-white', {
        'h-[80px]': pathName === '/user',
        'h-[168px]': pathName !== '/user',
      })}>
      <div className={layoutStyle}>
        <div className='md:gird-cols-2 grid h-[80px] grid-cols-3 sm:grid-cols-2 lg:grid-cols-3'>
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
          <nav className='flex items-center justify-center sm:hidden md:hidden lg:flex'>
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
            <div className='flex flex-row items-center sm:hidden md:flex'>
              <p className='mr-3 text-sm'>당신의 공간을 에어비앤비하세요.</p>
              <Image
                alt={'HeaderWorld'}
                src={`/images/HeaderWorld.svg`}
                width={18}
                height={18}
                style={{ width: 18, height: 18 }}
              />
            </div>
            <HeaderProfileButton />
          </div>
        </div>
        {pathName !== '/profile' && <SearchBar />}
      </div>
    </header>
  )
}

export default Header
