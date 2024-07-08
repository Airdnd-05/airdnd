import getRatingCount from '@/utils/getRatingCount'
import getRoomsDetail from '@/app/apis/fetchRoomsData/getRoomsDetail'
import CommentReveiw from '@/components/detailPage/comment/CommentReview'
import GuestFavorite from '@/components/detailPage/comment/GuestFavorite'
import CommentRating from '@/components/detailPage/comment/CommentRating'
import NonGuestFavorite from './NonGuestFavorite'
import CommentModalButton from './CommentModalButton'

export default async function Comment({ id }) {
  const res = await fetch('http://localhost:3000/data/comments.json')
  const data = await res.json()
  const comments = [...data.commentsData]

  const roomRatings = comments.map(e => e.rating)
  const ratingArray = getRatingCount({ roomRatings })

  const roomRating = await getRoomsDetail(id, ['rating']) // 숙소 평점 가져오기
  const guestFavorite = await getRoomsDetail(id, ['guestFavorite']) // 게스트 선호 여부 가져오기
  const reviewCount = await getRoomsDetail(id, ['reviewCount']) // 후기 갯수 가져오기

  return (
    <div className='mt-12 flex flex-col border-b border-solid border-neutral-300 pb-12 font-semibold'>
      {guestFavorite.guestFavorite ? (
        <GuestFavorite roomRating={roomRating.rating} />
      ) : (
        <NonGuestFavorite reviewCount={reviewCount.reviewCount} rating={roomRating.rating} />
      )}
      {/* 후기가 3개 이상일 때 평균 평점 표시 */}
      {reviewCount.reviewCount > 2 && <CommentRating ratingArray={ratingArray} reviewsCount={6} />}
      <CommentReveiw comments={comments} />
      <CommentModalButton>{`후기 ${reviewCount.reviewCount}개 모두 보기`}</CommentModalButton>
    </div>
  )
}
