import fetchRoomsData from '@/utils/fetchRoomsData'
import Image from 'next/image'

export default async function AccommodationDesc({ id }) {
  const { desc } = await fetchRoomsData(id, ['desc'])

  return (
    <div className="pt-8 pb-12 whitespace-pre border-b border-solid border-neutral-300">
      <div className="line-clamp-6 text-wrap">{desc}</div>
      <div className="mt-4">
        <span className="font-semibold underline cursor-pointer">더 보기</span>
        <span className="ml-1">
          <Image
            src="/images/SquareBracketRight.svg"
            alt="SquareBracketRight"
            width={14}
            height={14}
            style={{ display: 'inline' }}
          />
        </span>
      </div>
    </div>
  )
}
