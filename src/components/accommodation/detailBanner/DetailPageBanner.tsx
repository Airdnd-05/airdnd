import Image from 'next/image'
import HeartButton from '@/components/accommodation/detailBanner/HeartButton'
import fetchRoomsData from '@/utils/fetchRoomsData'

function ShareButton() {
  return (
    <button className="flex p-2 mr-4 hover:bg-gray-200">
      <Image alt={'shareIcon'} src={`/images/shareIcon.svg`} width={16} height={16} className="m-1" />
      <div className="underline">공유하기</div>
    </button>
  )
}

async function DetailPageBanner({ id }) {
  const fields = ['accommodationName', 'imageUrl']
  const { accommodationName, imageUrl } = await fetchRoomsData(id, fields)

  const mainIng = imageUrl[0]
  console.log(mainIng)
  const detailImg = [imageUrl[1], imageUrl[2], imageUrl[3], imageUrl[4]]

  return (
    <div>
      <div className="flex justify-between mb-5">
        <div className="mt-6 text-2xl font-bold">{accommodationName}</div>
        <div className="flex items-end">
          <ShareButton />
          <HeartButton />
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-lg">
        <div className="col-span-2 row-span-2 -mb-2 -ml-2">
          <div className="relative h-[700px]">
            <Image
              alt={'큰 갤러리'}
              className="w-full hover:brightness-75"
              src={mainIng}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        {detailImg.map((eachImg, index) => {
          return (
            <div key={index} className="relative">
              <Image
                alt={'작은 갤러리'}
                className="w-full hover:brightness-75"
                src={eachImg}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DetailPageBanner
