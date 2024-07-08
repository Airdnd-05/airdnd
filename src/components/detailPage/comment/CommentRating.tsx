import RatingBar from '@/components/detailPage/comment/RatingBar'
import clsx from 'clsx'
import Image from 'next/image'

function ReviewItem({ svgName }) {
  return (
    <>
      <div className='flex items-center'>
        <Image alt={svgName} src={`/images/commentRating/${svgName}.svg`} width={32} height={32} />
      </div>
    </>
  )
}
export default function CommentRating({ ratingArray, reviewsCount }) {
  const reverseRating = ratingArray.reverse()
  const detailName = ['청결도', '정확도', '체크인', '의사소통', '위치', '가격 대비 만족도']
  const svgName = ['Cleanliness', 'Accuracy', 'Check_in', 'Communication', 'Location', 'Value']
  const ratings = [5.0, 5.0, 4.9, 4.9, 4.3, 4.6]

  return (
    <div className='flex w-full border-b border-solid border-neutral-300 pb-12'>
      <div className='flex flex-1 flex-col items-start border-r border-solid border-neutral-300 pb-1 font-medium'>
        <div>전체 평점</div>
        <div className='flex w-full flex-col items-center justify-center'>
          {reverseRating.map((e, i) => (
            <div key={e} className='h-4 w-full'>
              <div className='mr-1.5 inline-block text-xs font-medium'>{5 - i}</div>
              <RatingBar part={e} total={reviewsCount} />
            </div>
          ))}
        </div>
      </div>

      {detailName.map((e, i) => (
        <div
          key={e}
          className={clsx(
            'flex flex-1 flex-col justify-between pb-1 pl-4',
            detailName.length - 1 > i && 'border-r border-solid border-neutral-300',
          )}>
          <div>
            <p className='font-medium'> {e}</p>
            <div>{ratings[i].toFixed(1)}</div>
          </div>

          <ReviewItem key={svgName[1]} svgName={svgName[i]} />
        </div>
      ))}

      {/* {svgName.map(e => (
        <ReviewItem key={e} svgName={e} />
      ))} */}
    </div>
  )
}
