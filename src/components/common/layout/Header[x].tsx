import Image from 'next/image'
import HeaderProfileButton from '@/components/common/Header/HeaderProfileButton'

function Header() {
  return (
    <>
      <header className='h-[80px] border-b border-solid border-gray-200 bg-white px-20'>
        <div className='mx-[8.5rem] grid h-[80px] grid-cols-3'>
          <div className='flex'>
            <Image
              alt={'HeaderLogo'}
              src={`/images/HeaderLogo.svg`}
              width={120}
              height={32}
              style={{ width: 120, height: 32 }}
            />
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex h-[50px] items-center justify-center gap-1 rounded-full border border-solid border-gray-200 bg-white p-1 text-sm shadow'>
              <button className='ml-3'>어디든지</button>
              <span className='inline h-[0px] w-6 rotate-90 border border-solid border-gray-200'></span>
              <button>언제든 일주일</button>
              <span className='h-[0px] w-6 rotate-90 border border-solid border-gray-200'></span>
              <button>게스트 추가</button>
              <button className='ml-3 mr-1'>
                <Image
                  alt={'HeaderSearch'}
                  src={`/images/HeaderSearch.svg`}
                  width={32}
                  height={32}
                  style={{ width: 32, height: 32 }}
                />
              </button>
            </div>
          </div>
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
            <HeaderProfileButton />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
