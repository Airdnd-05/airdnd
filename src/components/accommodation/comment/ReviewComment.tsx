'use client'

import { useState } from 'react'

export const commentsData = [
  {
    name: 'Jooyeun',
    location: '서울, 한국',
    rating: 5,
    date: '2024년 1월',
    comment:
      '아름다운 금릉옥서 정원과 전원생활의 로맨틱 같은 숙소입니다. 호스트님 덕분에 정말 즐거운 경험을 했습니다. 더운 날씨에도 너무 잘 관리된 정원에서 식물들을 좋아하거나 가드닝을 즐기는 분들께 강력히 추천드립니다.',
  },
  {
    name: 'Ho Joon',
    location: '한국',
    rating: 5,
    date: '6개월 전',
    comment:
      '사진보다 더 아름다운 숙소와 정원이 있습니다. 호스트분들께서 직접 정성스럽게 매일 배려해주셔서 음식이 맛있는 홈메이드 감자를 즐길 수 있었습니다. 이런 경험을 통해 더 많이 배웠습니다.',
  },
  {
    name: '윤영',
    location: '한국',
    rating: 5,
    date: '2주 전',
    comment:
      '동화 속 같은 숙소! 퇴근 후 쉬고 싶어 발현한 호텔 대신 한적한 주택을 찾아 선택했습니다. 호스트님께서 다양한 로스트 농산물 농장 귀엽고 사랑스러운 숙소입니다. 꼭 다시 방문하고 싶어요.',
  },
  {
    name: '동혁',
    location: '한국',
    rating: 5,
    date: '3개월 전',
    comment:
      '산속에서 쉼표를 찍고자 놀러 왔습니다. 좋은 호스트와 함께하여 매우 만족스러웠습니다. 다음에 또 방문하고 싶습니다.',
  },
  {
    name: '혜성',
    location: '한국',
    rating: 5,
    date: '2024년 4월',
    comment:
      '이 숙소의 위치와 분위기는 정말 완벽했습니다. 호스트님도 매우 친절하시고 응답도 빨랐습니다. 다시 방문하고 싶은 곳입니다.',
  },
  {
    name: 'Seungji',
    location: '한국',
    rating: 4,
    date: '2024년 4월',
    comment: '환상적인 풍경과 아름다운 숙소입니다. 다시 방문하고 싶습니다.',
  },
]

const ReviewComment = () => {
  const [comments, setComments] = useState(commentsData.slice(0, 6))

  return (
    <div className='container mx-auto mb-6 grid grid-cols-1 gap-4 p-4 md:grid-cols-2'>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className='mt-4 flex border-t border-gray-300 pt-4'>
            <div className='mr-4 h-12 w-12 flex-shrink-0 rounded-full bg-gray-200'></div>
            <div>
              <p className='text-lg font-semibold'>{comment.name}</p>
              <p className='text-sm text-gray-600'>{comment.location}</p>
              <p className='text-sm'>
                {'★'.repeat(comment.rating)}
                {'☆'.repeat(5 - comment.rating)} {comment.date}
              </p>
              <p className='mt-2'>{comment.comment}</p>
            </div>
          </div>
        ))
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </div>
  )
}

export default ReviewComment
