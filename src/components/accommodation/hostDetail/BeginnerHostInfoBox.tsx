import Image from 'next/image'

const currentDate = new Date()
const YEAR = currentDate.getFullYear()

function BeginnerHostInfoBox({ hostName, hostExperience, hostImageUrl }) {
  return (
    <div className='ml-14 mt-10 flex h-[12rem] w-80 flex-col items-center justify-center rounded-[21px] bg-[white] shadow-lg'>
      <div className='h-24 w-24 overflow-hidden rounded-full bg-gray-200'>
        <Image alt='호스트' src={hostImageUrl} className='h-full w-full object-cover' />
      </div>
      <div className='mb-[0.4rem] text-[1.8rem] font-bold'>{hostName}</div>
      <div className='text-xs font-bold'>{YEAR - hostExperience}년에 호스팅 시작</div>
      <div></div>
    </div>
  )
}

export default BeginnerHostInfoBox
