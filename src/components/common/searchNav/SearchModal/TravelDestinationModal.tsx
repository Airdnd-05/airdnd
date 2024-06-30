import { setActiveIndex } from '@/redux/features/SearchSlice'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

const imageData = [
  {
    alt: '유연한 검색',
    src: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320',
    label: '유연한 검색',
  },
  {
    alt: '유럽',
    src: 'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320',
    label: '유럽',
  },
  {
    alt: '일본',
    src: 'https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320',
    label: '일본',
  },
  {
    alt: '동남아시아',
    src: 'https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320',
    label: '동남아시아',
  },
]

const localItem = [
  {
    title: '서울',
  },
  {
    title: '부산',
  },
  {
    title: '속초',
  },
  {
    title: '강릉',
  },
  {
    title: '전주',
  },
  {
    title: '대구',
  },
  {
    title: '경주',
  },
  {
    title: '여수',
  },
  {
    title: '서귀포',
  },
  {
    title: '대전',
  },
  {
    title: '제주도',
  },
  {
    title: '인천',
  },
]

function TravelDestinationModal({ handleClick }) {
  const dispatch = useDispatch()
  const handleItemClick = title => {
    handleClick(1, title)
    dispatch(setActiveIndex(1))
  }
  return (
    <div className='absolute left-0 top-20 z-50 rounded-3xl bg-white p-[30px] shadow-lg'>
      <div className='flex flex-col p-5'>
        <div className='flex flex-col'>
          <h3 className='ml-[8px] pb-[10px] text-sm font-bold'>지역으로 검색하기</h3>
          <div>
            <div className='flex w-[400px] flex-row justify-center gap-4'>
              {imageData.map(image => (
                <div
                  key={image.alt}
                  className='flex flex-col items-center p-2 hover:rounded-lg hover:bg-gray-200'>
                  <Image
                    alt={image.alt}
                    src={image.src}
                    width={100}
                    height={100}
                    className='rounded-lg'
                  />
                  <p className='pt-2 text-sm'>{image.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className='ml-[8px] py-5 text-sm font-bold'>한국</h3>
          <div>
            <ul className='grid grid-cols-4 gap-4'>
              {localItem.map(item => (
                <li
                  onClick={() => handleItemClick(item.title)}
                  className='rounded-3xl border border-solid border-gray-300 p-3 text-center text-sm hover:border-black'
                  key={item.title}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelDestinationModal
