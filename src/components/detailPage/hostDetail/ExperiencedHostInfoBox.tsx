import Image from 'next/image'

function hostNameTextSize(hostName) {
  // hostName의 길이에 따라 텍스트 크기를 결정
  const textSizeClass = hostName.length >= 15 ? 'text-[1rem]' : 'text-[2rem]'

  return <div className={` ${textSizeClass} font-bold`}>{hostName}</div>
}

function HostInfoBox({
  hostImageUrl,
  hostName,
  hostReviewCount,
  hostRate,
  hostExperience,
  isSuperHost,
}) {
  return (
    <div className='flex h-full flex-row justify-center'>
      <div className='flex basis-2/3 flex-col items-center justify-center'>
        <div>
          <Image
            alt='호스트 이미지'
            src={hostImageUrl}
            width={240}
            height={240}
            className='h-[6rem] w-[6rem] rounded-full object-cover'
          />
        </div>

        <div className='flex flex-col items-center'>{hostNameTextSize(hostName)}</div>

        <div>
          <div className='text-xs font-bold'>
            {isSuperHost ? (
              <div className='flex flex-row'>
                <Image
                  alt={'isSuperHostIcon'}
                  src={`/images/isSuperHostIcon.svg`}
                  width={16}
                  height={16}
                />
                <div className='text-[0.9rem]'> 슈퍼 호스트</div>
              </div>
            ) : (
              <div>호스트</div>
            )}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <div className='flex basis-1/3 flex-col gap-[1rem]'>
          <div className='flex flex-col'>
            <div className='text-[0.6rem] font-bold'>후기</div>
            <div className='flex flex-row items-center'>
              <div className='flex flex-row'>
                <div className='text-2xl font-bold'>{hostReviewCount}</div>{' '}
                <div className='pl-[0.1rem] pt-[1rem] text-[0.6rem] font-bold'>개</div>
              </div>
            </div>
            <hr className='mt-[0.4rem] w-[6rem] border-t border-gray-300'></hr>
          </div>
          <div className='flex flex-col'>
            <div className='text-[0.6rem] font-bold'>평점</div>
            <div className='flex flex-row'>
              <div className='text-2xl font-bold'>{hostRate}</div>{' '}
              <Image
                alt={'HostRate'}
                src={`/images/HostRate.svg`}
                width={0}
                height={0}
                style={{ width: 20, height: 20 }}
              />
            </div>
            <hr className='mt-[0.4rem] w-[6rem] border-t border-gray-300'></hr>
          </div>

          <div className='flex flex-col'>
            <div className='text-[0.6rem] font-bold'>호스팅 경력</div>
            <div className='flex flex-row'>
              <div className='text-2xl font-bold'>{hostExperience}</div>{' '}
              <div className='pl-[0.1rem] pt-[1rem] text-[0.6rem] font-bold'>년</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostInfoBox
