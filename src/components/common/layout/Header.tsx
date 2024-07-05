'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import HeaderNavItem from '@/components/common/Header/HeaderNavItem'
import SearchBar from '@/components/common/searchNav/SearchBar'
import HeaderProfileButton from '@/components/common/Header/HeaderProfileButton'
import { useDispatch, useSelector } from 'react-redux'
import { setIsScrollNav } from '@/redux/features/scrollEventSlice'
import { throttle } from 'lodash'
import { RootState } from '@/redux/store'

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
  const dispatch = useDispatch()
  const tabSelectedRef = useRef(null)
  const isScrollNav = useSelector((state: RootState) => state.Scroll.isScrollNav)
  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        console.log('스크롤 이벤트 발생')
        if (!tabSelectedRef.current) return
        const nextTabNavOn = window.scrollY > tabSelectedRef.current.offsetTop + 100
        if (nextTabNavOn !== isScrollNav) {
          dispatch(setIsScrollNav(nextTabNavOn))
        }
      }, 300),
    [isScrollNav, dispatch],
  )

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll)
    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [throttledScroll])

  return (
    <header
      ref={tabSelectedRef}
      className={clsx('border-b border-solid border-gray-200 bg-white', {
        'h-[80px]': pathName === '/user',
        'h-[168px]': pathName !== '/user',
        '-translate-y-full': isScrollNav,
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
              <p
                className={clsx('mr-3 text-sm', {
                  'lg:hidden': pathName === '/rooms',
                })}>
                당신의 공간을 에어비앤비하세요.
              </p>
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
        {pathName !== '/user' && <SearchBar />}
      </div>
    </header>
  )
}

export default Header
