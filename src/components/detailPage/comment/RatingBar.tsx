export default function RatingBar({ part, total }) {
  const percentage = (part / total) * 100
  return (
    <div className='inline-block h-1 w-3/4 overflow-hidden rounded-full bg-gray-100'>
      <div className='h-1 bg-black' style={{ width: `${percentage}%` }}></div>
    </div>
  )
}
