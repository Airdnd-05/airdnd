'use client'

import hostInfo from '@/app/assets/data/host-detail.json'
import IsSuperHostIcon from '@icons/isSuperHostIcon.svg'
import HostRate from '@icons/HostRate.svg'

function HostInfoBox() {
  return (
    <div className="w-96 h-[14rem] shadow-lg mt-10  bg-[white] rounded-[21px] flex flex-col">
      <div className="flex flex-row mr-[1.7rem]">
        <div className="flex flex-col items-center basis-2/3">
          <img src={hostInfo.hostProfile.hostImageUrl} className="mt-6 w-[6rem] h-[6rem] rounded-full object-cover " />
          <div className="flex flex-col items-center mt-3">
            <div className="font-bold text-[1.8rem] mb-2 ">{hostInfo.hostProfile.hostName}</div>
            <div className="text-xs font-bold">
              {hostInfo.hostProfile.isSuperHost ? (
                <div className="flex flex-row">
                  
                  <IsSuperHostIcon width={16} height={16}/> <div className="text-[0.8rem]"> 슈퍼 호스트</div>
                </div>
              ) : (
                <div>호스트</div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[1.7rem] gap-[1rem] basis-1/3 justify-center">
          <div className="flex flex-col">
            <div className=" text-[0.6rem] font-bold">후기</div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row">
                <div className="text-2xl font-bold">{hostInfo.hostProfile.hostReviewCount}</div>{' '}
                <div className="font-bold text-[0.6rem]  pl-[0.1rem] pt-[1rem]">개</div>
              </div>
            </div>
            <hr className="mt-[0.4rem] w-[6rem] border-t border-gray-300"></hr>
          </div>
          <div className="flex flex-col">
            <div className="text-[0.6rem] font-bold">평점</div>
            <div className="flex flex-row">
              <div className="text-2xl font-bold">{hostInfo.hostProfile.hostRate}</div>{' '}
              <HostRate className="mt-[0.3rem]"/>
            </div>
            <hr className="mt-[0.4rem] w-[6rem] border-t border-gray-300"></hr>
          </div>

          <div className="flex flex-col">
            <div className="text-[0.6rem] font-bold">호스팅 경력</div>
            <div className="flex flex-row">
              <div className="text-2xl font-bold">{hostInfo.hostProfile.hostExperience}</div>{' '}
              <div className="font-bold text-[0.6rem] pl-[0.1rem] pt-[1rem]">년</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostInfoBox
