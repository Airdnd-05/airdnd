import hostInfo from '@data/host-detail.json'
import Image from 'next/image'

export default function HostProfile() {
  return (
    <div className="flex py-5 border-b border-neutral-300 border-solid ">
      <div className="rounded-full relative overflow-hidden w-11 h-11">
        <Image src={hostInfo.hostProfile.hostImageUrl} alt={hostInfo.hostProfile.hostName} fill objectFit="cover" />
      </div>
      <div className="ml-6">
        <div className="font-medium">호스트: {hostInfo.hostProfile.hostName} 님</div>
        <div className="text-sm text-neutral-500">호스팅 경력 {hostInfo.hostProfile.hostExperience}년</div>
      </div>
    </div>
  )
}
