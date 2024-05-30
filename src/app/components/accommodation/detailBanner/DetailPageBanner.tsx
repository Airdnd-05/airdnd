/*
  Issue: 현재 공유하기, 저장 버튼의 아이콘 svg가 올바르게 표시되지 않습니다.
  Next.js 14는 SVG를 Next/Image를 사용하거나 컴포넌트화해서 가져와야합니다.
  기존의 img src 방식은 사용할 수 없습니다.
  @svgr/webpack을 사용하여 컴포넌트화 되었으니 코드 리팩토링을 부탁드립니다.
*/

'use client'

import { useState } from 'react'
import detailPageBanner from '@/app/assets/data/detail-page-banner.json'
import ShareSvg from '@icons/shareIcon.svg'
import UnUseHeartSvg from '@icons/unUseHeartIcon.svg'
import UseHeartSvg from '@icons/useHeartIcon.svg'

function HeartButton() {
  const [valid, setValid] = useState(false)
  return (
    <button
      className="flex p-2 hover:bg-gray-200"
      onClick={() => {
        setValid(!valid)
      }}>
      {valid ? <UseHeartSvg className="mt-0.5 mr-2 size-5" /> : <UnUseHeartSvg className="mt-0.5 mr-2 size-5" />}
      <div className="underline">{valid ? '저장 목록' : '저장'}</div>
    </button>
  )
}

function ShareButton() {
  return (
    <button className="flex p-2 mr-4 hover:bg-gray-200">
      <ShareSvg lassName="mt-0.5 mr-2 w-5 h-5" />
      <div className="underline">공유하기</div>
    </button>
  )
}

function DetailPageBanner() {
  const mainIng = detailPageBanner.detailPage1.picMain
  const detailImg = [
    detailPageBanner.detailPage1.pic1,
    detailPageBanner.detailPage1.pic2,
    detailPageBanner.detailPage1.pic3,
    detailPageBanner.detailPage1.pic4,
  ]
  const titleInfo = detailPageBanner.detailPage1.titleInfo

  return (
    <div className="mx-20">
      <div className="flex justify-between mb-3">
        <div className="text-2xl font-bold">{titleInfo}</div>
        <div className="flex items-end">
          <ShareButton />

          <HeartButton />
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-lg overflow-hidden">
        <div className="col-span-2 row-span-2 -ml-2 -mb-2">
          <div>
            <img className="hover:brightness-75 w-full" src={mainIng.https}></img>
          </div>
        </div>
        {detailImg.map(eachImg => {
          return (
            <div>
              <img className="hover:brightness-75 w-full" src={eachImg.https}></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DetailPageBanner
