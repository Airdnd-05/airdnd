'use client'

import { useEffect, useState } from 'react'

import { commentsData } from './ReviewComment'

const ReviewStat = () => {
  const [comments, setComments] = useState([commentsData]) // 댓글 데이터를 저장할 상태
  const [averageRating, setAverageRating] = useState(0) // 평균 평점을 저장할 상태
  const [ratingCounts, setRatingCounts] = useState([0, 0, 0, 0, 0]) // 각 평점의 개수를 저장할 상태

  useEffect(() => {
    // commentsData에서 댓글을 가져와서 상태에 저장
    const fetchedComments = commentsData
    setComments(fetchedComments)

    // 댓글에서 평점을 추출하여 평균 평점을 계산
    const ratings = fetchedComments.map(comment => comment.rating)
    const avgRating = (ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length).toFixed(1)
    setAverageRating(avgRating)

    // 각 평점의 개수를 계산하여 상태에 저장
    const counts = [0, 0, 0, 0, 0]
    ratings.forEach(rating => {
      counts[5 - rating]++
    })
    setRatingCounts(counts)
  }, [])

  // 댓글이 3개 미만일 경우 출력안하기
  //   if (comments.length < 3) {
  //     return null
  //   }

  return (
    <div className='mb-6 w-full p-0 text-center'>
      <div className='relative mb-8 inline-block'>
        <h1 className='mx-16 mb-2 inline-block text-6xl font-bold'>{averageRating}</h1>
      </div>
      <p className='text-xl'>게스트 선호</p>
      <p className='text-md text-gray-500'>평점, 후기, 신뢰도 기준</p>
      <p className='text-md text-gray-500'>에어비앤비에서 가장 사랑받는 숙소</p>
      <div
        className='rounded-lg border border-gray-400 p-4 shadow-md'
        style={{
          background:
            'linear-gradient(to right, white 0%, white 10%, #f8f8f8 10%, #f8f8f8 90%, white 90%, white 100%)',
        }}>
        <div className='mx-0 mb-8 flex flex-wrap justify-between'>
          <div
            className='mb-4 flex flex-col items-center rounded-lg border border-gray-400 p-4 shadow-md'
            style={{ width: '12.5%', backgroundColor: 'white' }}>
            <p className='font-semibold'>전체 평점</p>
            <div className='w-full'></div>
          </div>
          <div
            className='mb-4 flex flex-col items-center rounded-lg border border-gray-400 p-4 shadow-md'
            style={{ width: '12.5%' }}>
            <p className='font-semibold'>청결도</p>
            <p className='text-xl'>5.0</p>
          </div>
          <div
            className='mb-4 flex flex-col items-center rounded-lg border border-gray-400 p-4 shadow-md'
            style={{ width: '12.5%' }}>
            <p className='font-semibold'>정확도</p>
            <p className='text-xl'>5.0</p>
          </div>
          <div
            className='mb-4 flex flex-col items-center rounded-lg border border-gray-400 p-4 shadow-md'
            style={{ width: '12.5%' }}>
            <p className='font-semibold'>체크인</p>
            <p className='text-xl'>5.0</p>
          </div>
          <div
            className='mb-4 flex flex-col items-center rounded-lg border border-gray-400 p-4 shadow-md'
            style={{ width: '12.5%' }}>
            <p className='font-semibold'>의사소통</p>
            <p className='text-xl'>5.0</p>
          </div>
          <div
            className='mb-4 flex flex-col items-center rounded-lg border border-gray-400 p-4 shadow-md'
            style={{ width: '12.5%' }}>
            <p className='font-semibold'>위치</p>
            <p className='text-xl'>4.8</p>
          </div>
          <div
            className='mb-4 flex flex-col items-center rounded-lg border border-gray-400 p-4 shadow-md'
            style={{ width: '12.5%', backgroundColor: 'white' }}>
            <p className='font-semibold'>가격 대비 만족도</p>
            <p className='text-xl'>4.9</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewStat
