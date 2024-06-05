import Image from 'next/image'

const currentDate = new Date()
const YEAR = currentDate.getFullYear()

function BeginnerHostInfoBox({ hostName, hostExperience, hostImageUrl }) {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <div className='h-24 w-24 overflow-hidden rounded-full bg-gray-200'>
        <Image
          alt='호스트 이미지'
          src={hostImageUrl}
          width={240}
          height={240}
          className='h-full w-full rounded-full object-cover'
        />
      </div>
      <div className='mb-[0.4rem] text-[1.8rem] font-bold'>{hostName}</div>
      <div className='text-xs font-bold'>{YEAR - hostExperience}년에 호스팅 시작</div>
    </div>
  )
}

export default BeginnerHostInfoBox
