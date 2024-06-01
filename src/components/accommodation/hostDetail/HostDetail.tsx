import HostInfoBox from '@/components/accommodation/hostDetail/HostInfoBox'
import HostIntro from '@/components/accommodation/hostDetail/HostIntro'
import HostDetailInfo from '@/components/accommodation/hostDetail/HostDetailInfo'
import BeginnerHostInfoBox from '@/components/accommodation/hostDetail/BeginnerHostInfoBox'
import Image from 'next/image'
import fetchRoomsData from '@/utils/fetchRoomsData'
import fetchHostData from '@/utils/fetchHostData'

async function HostDetail({ id }) {
  const { hostId } = await fetchRoomsData(id, ['hostId'])
  const fields = ['hostProfile', 'hostContact', 'hostDescription']
  const { hostProfile, hostContact, hostDescription } = await fetchHostData(hostId, fields)
  const { hostName, hostReviewCount, hostRate, hostExperience, isSuperHost, hostImageUrl, hostLanguage, hostLocation } =
    hostProfile
  const { hostResponseRate, hostResponseTime } = hostContact

  return (
    <div className="bg-host-detail-gray flex flex-row h-[30rem] rounded-[17px] ">
      <div className="flex flex-row ml-10 ">
        <div className="flex flex-col basis-1/3">
          {hostReviewCount === 0 ? (
            <BeginnerHostInfoBox hostImageUrl={hostImageUrl} hostExperience={hostExperience} hostName={hostName} />
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

          <HostIntro hostLanguage={hostLanguage} hostLocation={hostLocation} hostDescription={hostDescription} />
        </div>
      </div>

      <div className="flex flex-col w-full ">
        <div className=" text-left p-[2.3rem] ">
          {isSuperHost ? (
            <div>
              <div className="font-bold mb-[1rem]">{hostName} 님은 슈퍼호스트입니다</div>
              <div className="text-sm mb-[1rem]">
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는
                호스트입니다.
              </div>
              <HostDetailInfo hostResponseRate={hostResponseRate} hostResponseTime={hostResponseTime} />
            </div>
          ) : (
            <HostDetailInfo hostResponseRate={hostResponseRate} hostResponseTime={hostResponseTime} />
          )}
        </div>

        <div className="flex flex-row ml-[2rem] items-center">
          <Image alt={'Notice'} src={`/images/Notice.svg`} width={20} height={20} />
          <div className=" w-full text-left text-[0.8em]">
            안전한 결제를 위해 에어비앤비 웹사이트나 외부에서 송금하거나 대화를 나누지 마세요.
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostDetail
