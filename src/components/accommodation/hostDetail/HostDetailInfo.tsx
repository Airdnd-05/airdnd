function HostDetailInfo({ hostResponseRate, hostResponseTime }) {
  return (
    <>
      <div className='font-bold'>호스트 상세 정보</div>
      <div className='mt-[1rem] text-left text-sm'>응답률: {hostResponseRate}%</div>
      <div className='mb-[1rem] text-sm'>{hostResponseTime}시간 이내에 응답</div>
      <button className='h-[3rem] w-[13rem] rounded-[5px] bg-black text-sm font-bold text-white'>
        호스트에게 메시지 보내기
      </button>

      <div className='mt-[1.5rem] text-sm underline'>
        <a className='text-black'>사업자 정보</a>
      </div>
      <hr className='border-1 mt-[1.5rem] border-gray-300'></hr>
    </>
  )
}

export default HostDetailInfo
