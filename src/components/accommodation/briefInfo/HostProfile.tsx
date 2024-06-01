import fetchHostData from '@/utils/fetchHostData'
import fetchRoomsData from '@/utils/fetchRoomsData'
import Image from 'next/image'

export default async function HostProfile({ id }) {
  const { hostId } = await fetchRoomsData(id, ['hostId'])
  const { hostProfile } = await fetchHostData(hostId, ['hostProfile'])
  const { hostName, hostImageUrl, hostExperience } = hostProfile

  return (
    <div className="flex py-5 border-b border-solid border-neutral-300 ">
      <div className="relative overflow-hidden rounded-full w-11 h-11">
        <Image src={hostImageUrl} alt={hostName} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="ml-6">
        <div className="font-medium">호스트: {hostName} 님</div>
        <div className="text-sm text-neutral-500">호스팅 경력 {hostExperience}년</div>
      </div>
    </div>
  )
}
