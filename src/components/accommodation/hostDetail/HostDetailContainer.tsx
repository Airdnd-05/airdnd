import ExperiencedHostInfoBox from '@/components/accommodation/hostDetail/ExperiencedHostInfoBox'
import HostIntro from '@/components/accommodation/hostDetail/HostIntro'
import BeginnerHostInfoBox from '@/components/accommodation/hostDetail/BeginnerHostInfoBox'
import fetchRoomsData from '@/utils/fetchRoomsData'
import fetchHostData from '@/utils/fetchHostData'
import Image from 'next/image'

async function HostDetail({ id }) {
  const { hostId } = await fetchRoomsData(id, ['hostId'])
  const fields = ['hostProfile', 'hostContact', 'hostDescription']
  const { hostProfile, hostContact, hostDescription } = await fetchHostData(hostId, fields)
  const {
    hostName,
    hostReviewCount,
    hostRate,
    hostExperience,
    isSuperHost,
    hostImageUrl,
    hostLanguage,
    hostLocation,
  } = hostProfile
  const { hostResponseRate, hostResponseTime } = hostContact

  return (
    <>
      <div className='mb-[1.2rem] mt-[1.2rem] text-[1.3rem] font-bold'>호스트 소개</div>
      <div>
        <div className='ml-[1rem]  flex h-[30rem] flex-row rounded-[17px]'>
          <div className='mr-[4rem] flex flex-row'>
            <div className='flex basis-1/3 flex-col justify-around'>
              <div className='shadow-host-detail-shadow h-[14rem] w-96 flex-col justify-center rounded-[21px] bg-[white]'>
                {hostReviewCount === 0 ? (
                  <BeginnerHostInfoBox
                    hostImageUrl={hostImageUrl}
                    hostExperience={hostExperience}
                    hostName={hostName}
                  />
                ) : (
                  <ExperiencedHostInfoBox
                    hostImageUrl={hostImageUrl}
                    hostName={hostName}
                    hostReviewCount={hostReviewCount}
                    hostRate={hostRate}
                    hostExperience={hostExperience}
                    isSuperHost={isSuperHost}
                  />
                )}
              </div>
              <HostIntro
                hostLanguage={hostLanguage}
                hostLocation={hostLocation}
                hostDescription={hostDescription}
              />
            </div>
          </div>

          <div className='flex w-full flex-col justify-center'>
            <div className=' text-left'>
              {isSuperHost ? (
                <div>
                  <div className='mb-[1rem] font-bold'>{hostName} 님은 슈퍼호스트입니다</div>
                  <div className='mb-[1rem] text-sm'>
                    슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를
                    수 있도록 최선을 다하는 호스트입니다.
                  </div>
                </div>
              ) : null}
            </div>

            <div className='font-bold'>호스트 상세 정보</div>
            <div className='mt-[1rem] text-left text-sm'>응답률: {hostResponseRate}%</div>
            <div className='mb-[1rem] text-sm'>{hostResponseTime}시간 이내에 응답</div>
            <button className='h-[3rem] w-[13rem] rounded-[5px] bg-black text-sm font-bold text-white'>
              호스트에게 메시지 보내기
            </button>

            <div className='mt-[1.5rem] text-sm underline'></div>
            <hr className='border-1 mt-[1.5rem] border-gray-300'></hr>

            <div className='mt-[1rem] flex flex-row'>
              <Image alt={'Notice'} src={`/images/Notice.svg`} width={20} height={20} />
              <div className='w-full text-left text-[0.8em]'>
                안전한 결제를 위해 에어비앤비 웹사이트나 외부에서 송금하거나 대화를 나누지 마세요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HostDetail
