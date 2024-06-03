import Header from '@/components/common/layout/Header'
import Footer from '@/components/common/layout/Footer'

function Layout({ children }) {
  // 최상단에 크기 조정 px로 ! full로 잡고 안에 컨텐츠들을 수정한다.
  // 현재는 margin을 8.5rem으로 설정해 두었지만 언제든지 수정 가능
  // Header, Footer도 동일
  return (
    <div className='flex w-full flex-col'>
      <Header />
      <main className='w-full flex-grow'>
        <div className='mx-[8.5rem] px-20'>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
