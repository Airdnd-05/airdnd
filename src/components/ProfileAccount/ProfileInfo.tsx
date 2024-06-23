import Image from 'next/image'
import React from 'react'

function ProfileInfo() {
  const ProfileElement = [
    {
      title: '실명',
      content: '승현 김',
      action: '수정',
    },
    {
      title: '선호하는 이름',
      content: '제공되지 않음',
      action: '추가',
    },
    {
      title: '이메일 주소',
      content: 's***2@gmail.com',
      action: '수정',
    },
    {
      title: '전화번호',
      content:
        '예약이 확정된 게스트와 에어비앤비가 연락할 수 있는 전화번호를 입력하세요. 다른 전화번호를 추가하고 어떻게 사용할지 설정할 수 있습니다.',
      action: '추가',
    },
    {
      title: '정부 발급 신분증',
      content: '제공되지 않음',
      action: '추가',
    },
    {
      title: '주소',
      content: '제공되지 않음',
      action: '수정',
    },
    {
      title: '비상 연락처',
      content: '제공되지 않음',
      action: '추가',
    },
  ]
  const ProfileData = [
    {
      imageSrc: './images/ProfilePrivacy.svg',
      title: '여기에 내 개인정보가 표시되지 않는 이유가 무엇인가요?',
      description: '신분이 노출되지 않도록 일부 계정 정보가 숨김 처리되었습니다.',
    },
    {
      imageSrc: './images/ProfileEdit.svg',
      title: '수정할 수 있는 세부 정보는 무엇인가요?',
      description:
        '연락처 정보와 개인정보를 수정하실 수 있습니다. 본인 인증 시 이 정보를 사용했다면 호스팅을 계속하기 위해 또는 다음번 예약 진행 시 다시 인증을 받으셔야 합니다.',
    },
    {
      imageSrc: './images/ProfileInfo.svg',
      title: '다른 사람에게 어떤 정보가 공개되나요?',
      description: '에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를 공개합니다.',
      skipBorder: true,
    },
  ]
  return (
    <>
      <div className='my-10 flex flex-col'>
        <div className='flex text-sm'>
          <span>계정</span>
          <span className='mx-3'> &gt; </span>
          <span>개인정보</span>
        </div>
        <div className='text-3xl font-bold'>개인정보</div>
      </div>
      <div className='mb-12 flex'>
        <div className='flex w-[80%] flex-col'>
          {ProfileElement.map(element => (
            <div className='flex justify-between py-6' key={element.title}>
              <div className='flex flex-col'>
                <h3>{element.title}</h3>
                <span className='mt-1 text-sm text-gray-400'>{element.content}</span>
              </div>
              <div className='cursor-pointer underline'>{element.action}</div>
            </div>
          ))}
        </div>
        <div className='ml-20 w-[20%] min-w-[300px] rounded-xl border border-solid border-gray-200 p-6 '>
          {ProfileData.map((item, index) => (
            <div key={item.title}>
              <Image alt={`ProfileInfoImage-${index}`} src={item.imageSrc} width={48} height={48} />
              <div className='mt-4 text-xl font-bold'>{item.title}</div>
              <div className='mt-4 text-gray-400'>{item.description}</div>
              {!item.skipBorder && (
                <div className='my-10 border-b border-solid border-gray-200'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProfileInfo
