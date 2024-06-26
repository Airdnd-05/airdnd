import './Profile.css'

function ProfileLayout({ children }) {
  return (
    <div id='profileroot' className='mx-10'>
      {children}
    </div>
  )
}

export default ProfileLayout
