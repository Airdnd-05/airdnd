'use client'

import { useState } from 'react'
import detailPageBanner from '@data/detail-page-banner.json'
import Image from 'next/image'

function HeartButton() {
  const [valid, setValid] = useState(false)
  return (
    <button
      className="flex p-2 hover:bg-gray-200"
      onClick={() => {
        setValid(!valid)
      }}>
      {/* {valid ? <UseHeartSvg className="mt-0.5 mr-2 size-5" /> : <UnUseHeartSvg className="mt-0.5 mr-2 size-5" />} */}
      {valid ? (
        <Image alt={'useHeartIcon'} src={`/images/useHeartIcon.svg`} width={16} height={16} className="m-1" />
      ) : (
        <Image alt={'unUseHeartIcon'} src={`/images/unUseHeartIcon.svg`} width={16} height={16} className="m-1" />
      )}
      <div className="underline">{valid ? '저장 목록' : '저장'}</div>
    </button>
  )
}

function ShareButton() {
  return (
    <button className="flex p-2 mr-4 hover:bg-gray-200">
      <Image alt={'shareIcon'} src={`/images/shareIcon.svg`} width={16} height={16} className="m-1" />
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
    <div>
      <div className="flex justify-between mb-5">
        <div className="mt-6 text-2xl font-bold">{titleInfo}</div>
        <div className="flex items-end">
          <ShareButton />
          <HeartButton />
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-lg">
        <div className="col-span-2 row-span-2 -mb-2 -ml-2">
          <div>
            <img className="w-full hover:brightness-75" src={mainIng.https}></img>
          </div>
        </div>
        {detailImg.map((eachImg, index) => {
          return (
            <div key={index} className="relative">
              <Image
                alt={'대체 이미지'}
                className="w-full hover:brightness-75"
                src={eachImg.https}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DetailPageBanner
