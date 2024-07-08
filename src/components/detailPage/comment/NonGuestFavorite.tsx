export default function NonGuestFavorite({ reviewCount, rating }) {
  return (
    <div className='mb-10 items-start text-2xl'>
      {reviewCount >= 3 && <div className='inline-block'>{`★ ${rating} · `} </div>}
      <div className='inline-block  font-medium'>&nbsp;후기 {reviewCount}개</div>
      {reviewCount === 1 && (
        <div className='ml-1 text-sm font-medium text-neutral-500'>
          후기가 3개 이상이면 평균 평점이 표시됩니다.
        </div>
      )}
    </div>
  )
}
