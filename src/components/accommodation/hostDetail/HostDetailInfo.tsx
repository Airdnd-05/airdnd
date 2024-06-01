function HostDetailInfo({ hostResponseRate, hostResponseTime }) {
  return (
    <>
      <div className="font-bold ">호스트 상세 정보</div>
      <div className="mt-[1rem] text-sm text-left">응답률: {hostResponseRate}%</div>
      <div className="mb-[1rem] text-sm">{hostResponseTime}시간 이내에 응답</div>
      <button className="w-[13rem] h-[3rem] rounded-[5px] text-sm font-bold bg-black text-white">
        호스트에게 메시지 보내기
      </button>

      <div className="mt-[1.5rem] underline text-sm">
        <a className="text-black">사업자 정보</a>
      </div>
      <hr className="mt-[1.5rem] border-1 border-gray-300"></hr>
    </>
  )
}

export default HostDetailInfo
