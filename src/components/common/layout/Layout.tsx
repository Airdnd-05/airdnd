'use client'

import Header from '@/components/common/layout/Header'
import Footer from '@/components/common/layout/Footer'
import { usePathname } from 'next/navigation'

function Layout({ children }) {
  const pathName = usePathname()
  const layoutClassName = pathName === '/' ? 'px-20' : 'mx-[8.5rem] px-20'

  return (
    <div className='flex w-full flex-col'>
      <Header layoutStyle={layoutClassName} pathName={pathName} />
      <main className='w-full flex-grow'>
        <div className={layoutClassName}>{children}</div>
      </main>
      <Footer layoutStyle={layoutClassName} />
    </div>
  )
}

export default Layout
