import Image from 'next/image'
import HostInfoBox from '@/components/accommodation/hostDetail/HostInfoBox'
import HostIntro from '@/components/accommodation/hostDetail/HostIntro'
import HostDetailInfo from '@/components/accommodation/hostDetail/HostDetailInfo'
import BeginnerHostInfoBox from '@/components/accommodation/hostDetail/BeginnerHostInfoBox'
import fetchRoomsData from '@/utils/fetchRoomsData'
import fetchHostData from '@/utils/fetchHostData'

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
    <div className='bg-host-detail-gray flex h-[30rem] flex-row rounded-[17px]'>
      <div className='ml-10 flex flex-row'>
        <div className='flex basis-1/3 flex-col'>
          {hostReviewCount === 0 ? (
            <BeginnerHostInfoBox
              hostImageUrl={hostImageUrl}
              hostExperience={hostExperience}
              hostName={hostName}
            />
          ) : (
            <HostInfoBox
              hostImageUrl={hostImageUrl}
              hostName={hostName}
              hostReviewCount={hostReviewCount}
              hostRate={hostRate}
              hostExperience={hostExperience}
              isSuperHost={isSuperHost}
            />
          )}

          <HostIntro
            hostLanguage={hostLanguage}
            hostLocation={hostLocation}
            hostDescription={hostDescription}
          />
        </div>
      </div>

      <div className='flex w-full flex-col'>
        <div className='p-[2.3rem] text-left'>
          {isSuperHost ? (
            <div>
              <div className='mb-[1rem] font-bold'>{hostName} 님은 슈퍼호스트입니다</div>
              <div className='mb-[1rem] text-sm'>
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수
                있도록 최선을 다하는 호스트입니다.
              </div>
              <HostDetailInfo
                hostResponseRate={hostResponseRate}
                hostResponseTime={hostResponseTime}
              />
            </div>
          ) : (
            <HostDetailInfo
              hostResponseRate={hostResponseRate}
              hostResponseTime={hostResponseTime}
            />
          )}
        </div>

        <div className='ml-[2rem] flex flex-row items-center'>
          <Image alt={'Notice'} src={`/images/Notice.svg`} width={20} height={20} />
          <div className='w-full text-left text-[0.8em]'>
            안전한 결제를 위해 에어비앤비 웹사이트나 외부에서 송금하거나 대화를 나누지 마세요.
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostDetail
