'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/common/layout/Header'
import Footer from '@/components/common/layout/Footer'
import { cva } from 'class-variance-authority'

const layoutClassName = cva('', {
  variants: {
    pathName: {
      home: 'px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20',
      detail: 'px-4 sm:px-6 md:px-8 lg:mx-[5rem] lg:px-10 xl:mx-[8.5rem] xl:px-20',
    },
  },
  defaultVariants: {
    pathName: 'detail',
  },
})

function Layout({ children }) {
  const pathName = usePathname()
  const layoutClasses = layoutClassName({ pathName: pathName === '/' ? 'home' : 'detail' })

  return (
    <div className='flex w-full flex-col'>
      <Header layoutStyle={layoutClasses} pathName={pathName} />
      <main className='w-full flex-grow'>
        <div className={layoutClasses}>{children}</div>
      </main>
      <Footer layoutStyle={layoutClasses} />
    </div>
  )
}

export default Layout
