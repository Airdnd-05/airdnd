import { useDispatch } from 'react-redux'
import { addReview } from '@/redux/features/review/slice'

function ReviewModal({ onClose }) {
  const dispatch = useDispatch()

  const handleAddReview = () => {
    dispatch(addReview({}))
    onClose()
  }

  return (
    <div className='modal-container'>
      <h2>후기 모달</h2>
      <button onClick={handleAddReview}>후기 추가</button>
      <button onClick={onClose}>모달 닫기</button>
    </div>
  )
}

export default ReviewModal
