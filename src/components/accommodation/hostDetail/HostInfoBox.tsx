import Image from 'next/image'

function HostInfoBox({
  hostImageUrl,
  hostName,
  hostReviewCount,
  hostRate,
  hostExperience,
  isSuperHost,
}) {
  return (
    <div className='mt-10 flex h-[14rem] w-96 flex-col rounded-[21px] bg-[white] shadow-lg'>
      <div className='mr-[1.7rem] flex flex-row'>
        <div className='flex basis-2/3 flex-col items-center'>
          <Image
            alt='호스트 이미지'
            src={hostImageUrl}
            width={240}
            height={240}
            className='mt-6 h-[6rem] w-[6rem] rounded-full object-cover'
          />
          <div className='mt-3 flex flex-col items-center'>
            <div className='mb-2 text-[1.8rem] font-bold'>{hostName}</div>
            <div className='text-xs font-bold'>
              {isSuperHost ? (
                <div className='flex flex-row'>
                  <Image
                    alt={'isSuperHostIcon'}
                    src={`/images/isSuperHostIcon.svg`}
                    width={16}
                    height={16}
                  />
                  <div className='text-[0.8rem]'> 슈퍼 호스트</div>
                </div>
              ) : (
                <div>호스트</div>
              )}
            </div>
          </div>
        </div>

        <div className='mt-[1.7rem] flex basis-1/3 flex-col justify-center gap-[1rem]'>
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
