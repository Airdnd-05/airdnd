export default function CommentReveiw({ comments }) {
  return (
    <div className='flex flex-wrap'>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className=' mt-4 w-[50%] border-t border-gray-300 pr-36 pt-4'>
            <div className='mb-2 flex'>
              <div className='mr-4 h-12 w-12 rounded-full bg-gray-200'></div>
              <div className='flex flex-col'>
                <p className='text-lg font-semibold'>{comment.name}</p>
                <p className='text-sm text-gray-600'>{comment.location}</p>
              </div>
            </div>
            <div>
              <p className='text-sm'>
                <span className='mr-2'>
                  {'★'.repeat(comment.rating)}
                  {'☆'.repeat(5 - comment.rating)}
                </span>
                {comment.date}
              </p>
              <p className='mt-2 line-clamp-3 text-wrap'>{comment.comment}</p>
            </div>
          </div>
        ))
      ) : (
        <p className='mt-4 text-lg text-neutral-400'>댓글이 아직 없습니다</p>
      )}
    </div>
  )
}
