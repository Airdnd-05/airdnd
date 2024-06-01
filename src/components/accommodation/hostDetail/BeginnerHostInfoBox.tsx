const currentDate = new Date()
const YEAR = currentDate.getFullYear()

function BeginnerHostInfoBox({ hostName, hostExperience, hostImageUrl }) {
  return (
    <div className="w-80 h-[12rem] shadow-lg mt-10 ml-14  bg-[white] rounded-[21px] flex flex-col justify-center items-center">
      <div className="w-24 h-24 overflow-hidden bg-gray-200 rounded-full ">
        <img src={hostImageUrl} alt="" className="object-cover w-full h-full " />
      </div>
      <div className="text-[1.8rem] font-bold mb-[0.4rem]">{hostName}</div>
      <div className="text-xs font-bold ">{YEAR - hostExperience}년에 호스팅 시작</div>
      <div></div>
    </div>
  )
}

export default BeginnerHostInfoBox
