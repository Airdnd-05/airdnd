import Image from 'next/image'
import fetchRoomsData from '@/utils/fetchRoomsData'
import fetchHostData from '@/utils/fetchHostData'

export default async function HostProfile({ id }) {
  const { hostId } = await fetchRoomsData(id, ['hostId'])
  const { hostProfile } = await fetchHostData(hostId, ['hostProfile'])
  const { hostName, hostImageUrl, hostExperience } = hostProfile

  return (
    <div className='flex border-b border-solid border-neutral-300 py-5'>
      <div className='relative h-11 w-11 overflow-hidden rounded-full'>
        <Image
          src={hostImageUrl}
          alt={hostName}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className='ml-6'>
        <div className='font-medium'>호스트: {hostName} 님</div>
        <div className='text-sm text-neutral-500'>호스팅 경력 {hostExperience}년</div>
      </div>
    </div>
  )
}
