import { useDispatch } from 'react-redux'
import { setUserInfo } from '@/redux/features/signup/slice'

function SignUpModal({ onClose }) {
  const dispatch = useDispatch()

  const handleSignUp = () => {
    dispatch(setUserInfo({}))
    onClose()
  }

  return (
    <div className='modal-container'>
      <h2>회원 가입 모달</h2>
      <button onClick={handleSignUp}>가입하기</button>
      <button onClick={onClose}>모달 닫기</button>
    </div>
  )
}

export default SignUpModal
